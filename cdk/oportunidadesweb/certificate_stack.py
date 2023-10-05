from aws_cdk import Stack
from constructs import Construct

from aws_cdk.aws_certificatemanager import (Certificate,CertificateValidation)

from aws_cdk.aws_route53 import PublicHostedZone


class CertificateStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, domain_name: str, hosted_zone_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        zone=PublicHostedZone.from_public_hosted_zone_id(self, 'zone', public_hosted_zone_id=hosted_zone_id)

        self.certificate(zone, domain_name)


    def domain_name_to_identifier(self, domain_name: str):
        return domain_name.replace(".", "-")

    def certificate(self, zone: PublicHostedZone, domain_name: str):
         return Certificate(self, 'certificate',
            certificate_name='cert-' + self.domain_name_to_identifier(domain_name),
            domain_name=domain_name,
            subject_alternative_names=[ 'www.' + domain_name ],
            validation=CertificateValidation.from_dns(hosted_zone=zone)
        )
