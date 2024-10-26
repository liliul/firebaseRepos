import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {

  if (user) {
    if (!auth.currentUser.emailVerified) {
      document.querySelector('.formLogin').style.display = 'none';

      emailVerificadoMensagem('body', 'É obrigatorio autenticar seu email para usar Todolist')
      
      return setTimeout(() => window.location.href = "index.html", 3000); 
    }

  } else {
   
    console.log("Usuário não logado");
   
  }
});