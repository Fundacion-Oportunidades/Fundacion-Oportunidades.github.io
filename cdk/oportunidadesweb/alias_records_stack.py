from aws_cdk import (Stack,Duration)
from constructs import Construct

from aws_cdk.aws_route53 import (ARecord,CnameRecord,PublicHostedZone,RecordTarget)
from aws_cdk.aws_route53_targets import CloudFrontTarget
from aws_cdk.aws_cloudfront import Distribution


class AliasRecordsStack(Stack):
    def __init__(self, scope: Construct, construct_id: str,
        hosted_zone_id: str, distribution_id: str, domain_name: str, cloudfront_domain_name: str,
        **kwargs
    ) -> None:
        super().__init__(scope, construct_id, **kwargs)

        zone=PublicHostedZone.from_public_hosted_zone_attributes(self, 'zone',
            hosted_zone_id=hosted_zone_id,
            zone_name=domain_name
        )
        distribution=Distribution.from_distribution_attributes(self, 'Distribution',
            distribution_id=distribution_id,
            domain_name=cloudfront_domain_name
        )

        self.alias_records(zone=zone, distribution=distribution, domain_name=domain_name)


    def alias_records(self, zone: PublicHostedZone, distribution: Distribution, domain_name: str):
        ARecord(self, "AliasRecord",
            record_name=domain_name,    # if not set it is taken from CF distribution domain name
            zone=zone,
            target=RecordTarget.from_alias(CloudFrontTarget(distribution=distribution))
        )

        CnameRecord(self, "WWWRecord",
            zone=zone,
            record_name='www',
            domain_name=domain_name,
            ttl=Duration.minutes(5)
        )
