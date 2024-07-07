## UsersTodo

regras do firestore
```bash
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /teste-todo/{userId}/{document=**} {
        allow create, read, update, delete: if request.auth != null && request.auth.uid == userId;

        //allow read, write: if request.time < timestamp.date(2024, 8, 3);
        //allow create: if request.auth != null;
    }
  }
}
```
