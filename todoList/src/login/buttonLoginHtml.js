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