import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { utils } from '../utils/utils.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';
import { constants } from '../constants/index.js';
 
// let email = 'gokufirestore@email.com'
// let password = '123456'

// let email = 'narutofirestore@email.com'
// let password = '101919'

// fazer login
export function AuthSignIn() {
	const authSignIn = document.querySelector('#auth');
	
	if (!authSignIn) {
		console.warn('Formulário não encontrado.');
		return;
	}
	
	authSignIn.addEventListener('submit', (event) => {
		event.preventDefault();
		
		const email    = event.target.Email.value.trim();
		const password = event.target.PassWord.value.trim();

		const validandoEmail = utils.ValidandoEmail(email);
		if (validandoEmail.error) {
			emailVerificadoMensagem('.isolate-login', `Erro no email: ${validandoEmail.error}`);
			return
		}
		
		const auth = getAuth();
		signInWithEmailAndPassword(auth, validandoEmail.original, password)
		.then((userCredential) => {
			
			const user = userCredential.user;
			
			if (!user.emailVerified) {
				emailVerificadoMensagem('.isolate-login', `Verifica seu email: ${email} na sua caixa de email.`);
				return;
			}

			document.querySelector('.h2-login').innerHTML = `<i>${utils.iconSelect}</i>`;

			setTimeout(() => {
				window.location = './todoList.html';
			}, 2000)
		})
		.catch((error) => {
			const mensagens = {
				"auth/invalid-credential": constants.EMAIL_SENHA_INCORRETO,
				"auth/invalid-email": constants.EMAIL_FORMATO_INVALIDO,
				"auth/user-disabled": constants.CONTA_DESATIVADA,
				"auth/user-not-found": constants.NENHUMA_CONTA_COM_ESTE_EMAIL,
			}
			const erroMensagem = mensagens[error.code] || "Erro ao fazer login. Tente novamente.";
			emailVerificadoMensagem('.isolate-login', erroMensagem);
			
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// console.error('Code: ', errorCode, 'message: ', errorMessage);
			
			// document.querySelector('.h2-login').innerHTML = `<span style="color: tomato;">Erro ao fazer Login Email ou Senha invalido</span>`;
		});

	})
}
