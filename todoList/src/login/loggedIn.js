import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    window.location.href = "todoList.html"; 
  
  } else {
   
    console.log("Usuário não logado");
   
  }
});