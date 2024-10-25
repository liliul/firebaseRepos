import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {

  if (user) {
    if (!auth.currentUser.emailVerified) {
      return window.location.href = "index.html"; 
    }

  } else {
   
    console.log("Usuário não logado");
   
  }
});