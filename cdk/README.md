
# Deploy ApoloStack

No deployear todo junto, deployar y administrar por stack independientemente.

- Instalar cdk y seguir las instrucciones.
- Usar `profiles` (o STS) para manejar la auntenticación
- Levantar el entorno de Python:

```bash
python3 -m venv .venv
source venv/bin/activate
pip install -r requirements.txt
```

- Bootstapear CDK en todas las regiones. **Hacer esto una sola vez, no rehacerlo!**


```sh
account_number=<obtener el id del perfil>
for region in us-east-1 eu-south-2
do
	cdk --profile dmob aws://${account_number}/${region}
done
```

## Deployar

```sh
cdk --profile dmob deploy ApoloRoute53Stack

# get the generated ZoneId, update the code --yes, this suckz
cdk --profile dmob deploy ApoloCertificateStack

# get the certificate ARN, update the code --yes, this suckz
cdk --profile dmob deploy ApoloCloudFrontS3Stack

# get the CF distribution id and domain_name, update the code --yes, this suckz
cdk --profile dmob deploy ApoloCloudFrontS3Stack
```
