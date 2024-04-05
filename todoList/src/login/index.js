import { db } from '../config/firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { utils } from '../utils/utils.js';
import './createUser.js';

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
	   	console.log('auth ', user.uid)
	   	document.querySelector('.h2-login').innerHTML = `<i>${utils.iconSelect}</i>`;
	   	
	    setTimeout(() => {
	      window.location = './todoList.html';
	    }, 3000)
	})
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	   	console.log('e1', errorCode, 'e2', errorMessage);
	   	alert('Erro ao fazer Login');
	});

})


	
const clickButtonLogin = document.getElementById('b-login');

clickButtonLogin.addEventListener('click', () => {
	document.querySelector('.form-control').innerHTML = `
		<form class="form-login" data-authentication="auth">
			<h2 class="h2-login">Fazer Login</h2>
		
			<label class="label-login" for="Email">Email</label>
			<input class="input-login" type="email" id="Email" name="Email" required placeholder="Digite seu email">
			
			<label class="label-login" for="PassWord">Password</label>
			<input class="input-login" type="password" id="PassWord" name="PassWord" required placeholder="Digite sua senha">

			<button class="button-login" type="submit">Enviar</button>
		</form>
	`;
})


