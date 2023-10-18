# Oportunidades Site


```bash
npm run build
cp -R dist/ cdk/dist
```

```bash
cdk --profile=developer deploy
```

Site rolling updates through `aws s3`.

```
    - aws s3 sync public/ s3://$AWS_S3_BUCKET/ #--recursive
    - aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*'
```

These variables should be present in the repository settings, under CI/CD, in protected mode:

AWS_S3_BUCKET — (the exact name of the S3 bucket)
AWS_ACCESS_KEY_ID — provided by AWS within IAM
AWS_SECRET_ACCESS_KEY — provided by AWS within IAM
AWS_DEFAULT_REGION — selected by you when creating the S3 bucket (optional, may work without this)
CLOUDFRONT_DISTRIBUTION_ID - get this from the executed stack

More info about the code [here](https://www.youtube.com/watch?v=NRZEoXG59g0).