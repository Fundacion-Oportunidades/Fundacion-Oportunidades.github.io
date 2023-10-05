from aws_cdk import (Stack,Duration)
from constructs import Construct

from aws_cdk.aws_route53 import (PublicHostedZone,MxRecord,MxRecordValue,TxtRecord)


class Route53Stack(Stack):
    def __init__(self, scope: Construct, construct_id: str, domain_name: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        self.route53(domain_name)
        

    def route53(self, domain_name: str):
        zone=PublicHostedZone(self, 'public-hosted-zone',
            zone_name=domain_name
        )
        #Obtener los MX records de gmail que están actualmente agregados
        MxRecord(self, 'mxrecord',
            zone=zone,
            values=[
                MxRecordValue(host_name='mx.zoho.eu', priority=10)
                # MxRecordValue(host_name='mx2.zoho.eu', priority=20),
                # MxRecordValue(host_name='mx3.zoho.eu', priority=50)                
            ],
            ttl=Duration.minutes(5)
        )


        # Agregar los TXT necesarios, incluídos los que no seand de mail
        TxtRecord(self, 'txtrecord-root',
            zone=zone,
            values=[
                'zoho-verification=<>.zmverify.zoho.eu',
                'v=spf1 include:zoho.eu ~all'
            ],
            ttl=Duration.minutes(5)
        )

        TxtRecord(self, 'txtrecord-zmail',
            zone=zone,
            record_name='zmail._domainkey',
            values=[
                'v=DKIM1; k=rsa; <<>>'
            ],
            ttl=Duration.minutes(5)
        )

        return zone
