### Configuração do firebase

```bash

# criar arquivo env.js na raiz do projeto
touch env.js

# copia esse codigo no env.js e coloca as informações do firebase
const API_KEY = 
const AUTHDOMAIN = 
const PROJECTID = 
const STORAGEBUCKET = 
const MESSAGINGSENDERID = 
const APPID = 

# exportar variaveis
export const api = {
  API_KEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID
}

```
### Fim das configurações do firebase


### Regras do fireStore

```bash

# so permite acesso ao firestore com autenticação
allow read, write: if request.auth != null;

```
### Fim das regras do firebase