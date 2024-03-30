import { db } from '../config/firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth2 = getAuth();

onAuthStateChanged(auth2, (user) => {
  if (user) {
    document.querySelector('.formLogin').style.display = 'flex';

    document.querySelector('.s-email').textContent = user.email;
  } else {
    // Usuário não está logado
    console.log("Nenhum usuário está logado.");

    document.querySelector('.formLogin').style.display = 'none';
  }
});