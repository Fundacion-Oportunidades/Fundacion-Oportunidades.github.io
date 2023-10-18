

Already ran. 

```bash
source ./.env 
for region in us-east-1 us-east-2 sa-east-1 eu-west-1
do
	cdk --profile=developer bootstrap aws://${account_number}/${region}
done
```