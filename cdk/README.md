
# Deploy OportunidadesStack

No deployear todo junto, deployar y administrar por stack independientemente.

- Instalar cdk y seguir las instrucciones.
- Usar `profiles` (o STS) para manejar la auntenticación
- Levantar el entorno de Python:

```bash
python3 -m venv .venv
source venv/bin/activate
pip install -r requirements.txt
```

- Copiar el `.env` correspondiente 
- Bootstapear CDK en todas las regiones. **Hacer esto una sola vez, no rehacerlo!**


```sh
source .env

for region in us-east-1 us-east-2 sa-east-1
do
	cdk --profile developer bootstrap aws://${account_number}/${region}
done
```

## Deployar

```sh
cdk --profile developer deploy OportunidadesRoute53Stack

# get the generated ZoneId, update the code --yes, this suckz
cdk --profile developer deploy OportunidadesCertificateStack

# get the certificate ARN, update the code --yes, this suckz
cdk --profile developer deploy OportunidadesCloudFrontS3Stack

# get the CF distribution id and domain_name, update the code --yes, this suckz
cdk --profile developer deploy OportunidadesCloudFrontS3Stack
```
