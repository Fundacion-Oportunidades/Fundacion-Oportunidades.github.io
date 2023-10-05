from aws_cdk import Stack
from constructs import Construct

from aws_cdk.aws_certificatemanager import Certificate

from aws_solutions_constructs.aws_cloudfront_s3 import CloudFrontToS3


class CloudFrontS3Stack(Stack):
    def __init__(self, scope: Construct, construct_id: str, domain_name: str, certificate_arn: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        certificate=Certificate.from_certificate_arn(self, 'certificate', certificate_arn=certificate_arn)

        self.cloudfront_s3(certificate, domain_name)


    def cloudfront_s3(self, certificate: Certificate, domain_name: str):
        return CloudFrontToS3(self, 'test-cloudfront-s3',
            cloud_front_distribution_props={
                "domainNames": [ domain_name, 'www.' + domain_name ],
                "certificate": certificate,
                "enableLogging": False
            },
            log_s3_access_logs=False,
            bucket_props={
                "bucket_name": domain_name,
                "versioned": False
            },
            insert_http_security_headers=False  # Default (True) value caused CSP errors loading fonts
        )    
