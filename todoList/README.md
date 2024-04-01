### Regras do fireStore
```bash
# so permite acesso ao firestore com autenticação
allow read, write: if request.auth != null;
```