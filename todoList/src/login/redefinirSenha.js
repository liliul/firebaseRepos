import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { emailVerificadoMensagem } from '../utils/mensagem.js';
import { utils } from '../utils/utils.js';

const redefinirSenha = document.getElementById('redefinirSenha');

redefinirSenha.addEventListener('click', (e) => {
	const auth = getAuth();

	document.querySelector('.div-redefinir').style.display = 'none';
	document.querySelector('#b-login').removeAttribute('disabled')

	document.querySelector('.form-control').innerHTML = `
		<form id="redefinir-senha" class="form-login">
			<h2 class="h2-login">Redefinir Senha</h2>

			<label class="label-login" for="redefinir-email">Email</label>
			<input class="input-login" type="email" id="redefinir-email" name="Email-criar" required placeholder="Digite seu email">

			<button id="enviarEmail" class="button-login" type="submit">enviar senha</button>
		</form>
	`;

	document.querySelector('#redefinir-senha').addEventListener('submit', async (e) => {
		e.preventDefault();
		
		const emailRedefinirSenha = document.getElementById('redefinir-email').value.trim();
		
		await sendPasswordResetEmail(auth, emailRedefinirSenha);

		emailVerificadoMensagem('.isolate-login', `Email enviado para ${emailRedefinirSenha}`);
		
		setTimeout(() => {
			utils.renderizarTelaLogin()
		}, 5000);
	})
	
})


// auth/missing-email