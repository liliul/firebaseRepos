import { AuthSignIn } from "./signIn.js";

export function LoginRenderHtml() {
	const clickButtonLogin = document.getElementById('b-login');
	
	if (!clickButtonLogin) return
	
	clickButtonLogin.addEventListener('click', () => {

		document.querySelector('.form-control').innerHTML = `
			<form class="form-login" id="auth">
				<h2 class="h2-login">Fazer Login</h2>
			
				<label class="label-login" for="Email">Email</label>
				<input class="input-login" type="email" id="Email" name="Email" required placeholder="Digite seu email" autocomplete="email">
				
				<label class="label-login" for="PassWord">Password</label>
				<input class="input-login" type="password" id="PassWord" name="PassWord" required placeholder="Digite sua senha">

				<button class="button-login" type="submit">Enviar</button>
			</form>
		`

		const clickButtonCriar = document.getElementById('b-criar');
		clickButtonCriar.removeAttribute('disabled');
		document.querySelector('.div-redefinir').style.display = 'flex';
		clickButtonLogin.setAttribute('disabled', true);

		AuthSignIn()
	})
}

LoginRenderHtml()
