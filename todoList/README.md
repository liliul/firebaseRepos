### Configuração do firebase

```bash

# criar arquivo env.js na pasta config do projeto
touch src/config/env.js

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

# mais regra do firestore
match /teste-list/{userId}/todolist/{document=**} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}

```
### Fim das regras do firebase