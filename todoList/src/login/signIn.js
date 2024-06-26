import { db } from '../config/firestore.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { utils } from '../utils/utils.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';
 
// let email = 'gokufirestore@email.com'
// let password = '123456'

// let email = 'narutofirestore@email.com'
// let password = '101919'

const authSignIn = document.querySelector('[data-authentication="auth"]')

// fazer login
authSignIn.addEventListener('submit', (event) => {
	event.preventDefault();

	const email    = event.target.Email.value.trim();
	const password = event.target.PassWord.value.trim();

	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {

	    const user = userCredential.user;
	   	
	    if (!auth.currentUser.emailVerified) {
	    	emailVerificadoMensagem('.isolate-login', `Verifica seu email: ${email} na sua caixa de email.`);
	    	return;
	    }

	   	document.querySelector('.h2-login').innerHTML = `<i>${utils.iconSelect}</i>`;

	    setTimeout(() => {
	      window.location = './todoList.html';
	    }, 2000)
	})
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	   
	   	document.querySelector('.h2-login').innerHTML = `<span style="color: tomato;">Erro ao fazer Login Email ou Senha invalido</span>`;
	});

})
