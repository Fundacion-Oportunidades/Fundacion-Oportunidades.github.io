#!/usr/bin/env python3

import aws_cdk as cdk

from oportunidadesweb.route53_stack import Route53Stack
from oportunidadesweb.certificate_stack import CertificateStack
from oportunidadesweb.cloudfront_s3_stack import CloudFrontS3Stack
from oportunidadesweb.alias_records_stack import AliasRecordsStack


oportunidades_main_region='eu-south-2'
oportunidades_aws_account='<<>>'
oportunidades_domain_name='oportunidades.org.ar'


app = cdk.App()

Route53Stack(app, 'oportunidadesRoute53Stack',
    domain_name=oportunidades_domain_name,
    env=cdk.Environment(account=oportunidades_aws_account, region=oportunidades_main_region)
)
# Obtener el hosted_zone_id

CertificateStack(app, 'oportunidadesCertificateStack',
    domain_name=oportunidades_domain_name,
    hosted_zone_id='<<>>',
    # Certificates for CloudFront need to be issues in us-east-1
    env=cdk.Environment(account=oportunidades_aws_account, region='us-east-1')
)
# Se crea el certificado con el certificate_arn. 
# El formato es parecido a arn:aws:acm:us-east-1:<account_number>:certificate/<hash-md5

CloudFrontS3Stack(app, 'oportunidadesCloudFrontS3Stack',
    domain_name=oportunidades_domain_name,
    certificate_arn='<<>>',
    env=cdk.Environment(account=oportunidades_aws_account, region=oportunidades_main_region)
)
# Una vez creado, se obtiene el distribution_id y el domain_name del cloudfront '<hash>.cloudfront.net'


AliasRecordsStack(app, 'oportunidadesCloudFrontS3Stack',
    hosted_zone_id='<>',
    distribution_id='<>',
    cloudfront_domain_name='<>.cloudfront.net',
    domain_name=oportunidades_domain_name,
    env=cdk.Environment(account=oportunidades_aws_account, region=oportunidades_main_region)
)

app.synth()
