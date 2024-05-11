import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { utils } from '../utils/utils.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';

const clickButtonCriar = document.getElementById('b-criar');

clickButtonCriar.addEventListener('click', () => {

	document.querySelector('.form-control').innerHTML = `
		<form class="form-login" data-criar-conta="createuser">
			<h2 class="h2-login">Criar Conta</h2>

			<label class="label-login" for="Email-criar">Email</label>
			<input class="input-login" type="email" id="Email-criar" name="Email-criar" required placeholder="Digite seu email">

			<label class="label-login" for="PassWord-criar">Password</label>
			<input class="input-login" type="password" id="PassWord-criar" name="PassWord-criar" required placeholder="Digite sua senha">

			<label class="label-login" for="Confi">Confirmar senha</label>
			<input class="input-login" type="password" id="Confi" name="Confi" required placeholder="Confirmar senha">

			<button class="button-login" type="submit">Enviar</button>
		</form>
	`;

	const criarUser = document.querySelector('[data-criar-conta="createuser"]');

	criarUser.addEventListener('submit', (e) => {
		e.preventDefault();

		const email    = document.getElementById('Email-criar').value.trim();
		const password = document.getElementById('PassWord-criar').value.trim();
		const Confi    = document.getElementById('Confi').value.trim();
		
		if (password === Confi) {	
			const auth = getAuth();
			createUserWithEmailAndPassword(auth, email, password)
			  .then((userCredential) => {
			    const user = userCredential.user;

	   			const verificarEmail = auth.currentUser;

	   			sendEmailVerification(verificarEmail)
	   				.then(() => {
	   					emailVerificadoMensagem('.isolate-login', `Verifica seu email: ${email} para fazer login.`);
	   					
	   					document.querySelector('.h2-login').innerHTML = `<i>${utils.iconSelect}</i>`;

			   			setTimeout(() => {
			   				window.location.reload();
			   			}, 2000)
	   				})

			  })
			  .catch((error) => {
			  	switch(error.code) {
			  		case 'auth/email-already-in-use':
			  			document.querySelector('.h2-login').innerHTML = `<span style="color: yellow;">Erro Email ja existe</span>`;
			  			console.log('email-already-in-use');
			  			break;
			  		case 'auth/operation-not-allowed':
			  			document.querySelector('.h2-login').innerHTML = `<span style="color: purple;">Erro ao cadastra usuario</span>`;
			  			console.log('operation-not-allowed');
			  			break;
			  		case 'auth/invalid-email':
			  			document.querySelector('.h2-login').innerHTML = `<span style="color: tomato;">Erro email invalido</span>`;
			  			console.log('invalid-email');
			  			break;
			  		case 'auth/weak-password': 
			  			document.querySelector('.h2-login').innerHTML = `<span style="color: tomato;">Erro senha fraca</span>`;
			  			console.log('weak-password');
			  			break;			

			  	}
			  });
		}

		if (password != Confi) {
			document.querySelector('.h2-login').innerHTML = `<span style="color: purple;">Erro senha Diferentes</span>`;
			console.log('Diferente');
		}
	})
})
