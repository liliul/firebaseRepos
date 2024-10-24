import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {

  if (user) {
    if (!auth.currentUser.emailVerified) {
      return;
    }
    
    setTimeout(() => {
      window.location.href = "todoList.html"; 
    }, 1000)

  } else {
   
    console.log("Usuário não logado");
   
  }
});