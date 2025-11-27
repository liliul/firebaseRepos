import { AuthSignIn } from "../login/signIn.js";

const iconSelect = `
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>checkbox-checked</title>
<path fill="#4EA8DE" d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"></path>
</svg>
`;

export function renderizarTelaLogin() {
    document.querySelector('.form-control').innerHTML = `
        <form class="form-login" id="auth">
			<h2 class="h2-login">Fazer Login</h2>
		
			<label class="label-login" for="Email">Email</label>
			<input class="input-login" type="email" id="Email" name="Email" required placeholder="Digite seu email" autocomplete="email">
			
			<label class="label-login" for="PassWord">Password</label>
			<input class="input-login" type="password" id="PassWord" name="PassWord" required placeholder="Digite sua senha">

			<button class="button-login" type="submit">Enviar</button>
		</form>
    `;

    const clickButtonLogin = document.getElementById('b-login');
    const clickButtonCriar = document.getElementById('b-criar');

    clickButtonCriar.removeAttribute('disabled');
    clickButtonLogin.setAttribute('disabled', true);
    document.querySelector('.div-redefinir').style.display = 'flex';

	AuthSignIn()
}

export const utils = {
	iconSelect,
	renderizarTelaLogin
}