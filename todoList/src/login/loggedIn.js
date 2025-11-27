import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {

  if (user) {
    if (!auth.currentUser.emailVerified) {
      return;
    }
    
    setTimeout(() => {
      window.location.href = "todoList.html"; 
    }, 500)
    
  } else {
    
    document.querySelector(".isolate-login").removeAttribute('style')
    console.log("Usuário não logado");
   
  }
});