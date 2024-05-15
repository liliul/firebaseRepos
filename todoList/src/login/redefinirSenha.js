import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const redefinirSenha = document.getElementById('redefinirSenha');

redefinirSenha.addEventListener('click', (e) => {
	const auth = getAuth();

	document.querySelector('.form-control').innerHTML = `
		<form class="form-login" data-criar-conta="createuser">
			<h2 class="h2-login">Redefinir Senha</h2>

			<label class="label-login" for="Email-criar">Email</label>
			<input class="input-login" type="email" id="Email-criar" name="Email-criar" required placeholder="Digite seu email">
		</form>
	`;

	// const emailRedefinirSenha = 'liliuestudo@gmail.com';

	// await sendPasswordResetEmail(auth, emailRedefinirSenha)
	// alert(`redefinir senha do email: ${emailRedefinirSenha}`)
})
