import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const redefinirSenha = document.getElementById('redefinirSenha');

redefinirSenha.addEventListener('click', (e) => {
	const auth = getAuth();

	document.querySelector('.form-control').innerHTML = `
		<form class="form-login" data-criar-conta="createuser">
			<h2 class="h2-login">Redefinir Senha</h2>

			<label class="label-login" for="Email-criar">Email</label>
			<input class="input-login" type="email" id="Email-criar" name="Email-criar" required placeholder="Digite seu email">

			<button id="enviarEmail" class="button-login">enviar senha</button>
		</form>
	`;

	document.querySelector('.form-control').addEventListener('submit', async (e) => {
		e.preventDefault();
		
		const emailRedefinirSenha = document.getElementById('Email-criar').value.trim();
		console.log('email', emailRedefinirSenha)		
		const resetPassword = await sendPasswordResetEmail(auth, emailRedefinirSenha)
		if (resetPassword === 'auth/missing-email') {
			alert('resetPassword')
		}
		alert(`redefinir senha do email: ${emailRedefinirSenha}`)

		
	})
	
})


// auth/missing-email