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

/**
 * Dados necessários para renderizar a tela de erro.
 * @typedef {Object} RenderErrorData
 * @property {string} url - Caminho para o arquivo HTML que será carregado.
 * @property {string} [tag='body'] - Seletor CSS do elemento onde o conteúdo será inserido.
 * @property {string} titlePagina - Título que será aplicado ao documento.
 * @property {string} mensagem - Mensagem que será exibida no elemento #msg-error.
 */

/**
 * Renderiza uma tela de erro dentro da página, carregando HTML externo.
 *
 * @param {RenderErrorData} data - Objeto com as informações para renderização.
 * @returns {Promise<void>} - A função é assíncrona e não retorna nada.
 */

async function renderTelaError(data) {
	const { url, tag = 'body', titlePagina, mensagem } = data;

	/** @type {Response} */
	const req = await fetch(url);

	/** @type {string} */
	const res = await req.text();

	document.title = titlePagina;
	document.querySelector(tag).innerHTML = res;

	if (req.ok) {
		document.querySelector("#msg-error").textContent = mensagem
	}

	return true;
}

function ValidandoEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return { error: "Email inválido" };
  }

  const [ parteInicial, dominio] = email.toLowerCase().split("@");

  const provedor = dominio.split(".")[0];         
  const pontoCom = dominio.split(".").slice(1).join(".");

  const provedores = ["gmail", "outlook", "hotmail", "yahoo", "icloud", "live", "email"]

  const checarEmail = provedores.includes(provedor);

  if (!checarEmail) {
	return { error: "Provedor desse email invalido." };
  }

  return {
    original: email,
    usuario: parteInicial,
    provedorEmail: provedor,
    dominioCompleto: dominio,
    tld: pontoCom,
	checkEmail: checarEmail
  }
}

function ValidandoSenha(senha) {
	const regex = /^(?=.*[A-Z])[^\s]{8,}$/
	const senhaR = regex.test(senha)
 
	return { checkSenha: senhaR, password: senha }
}

export const utils = {
	iconSelect,
	renderizarTelaLogin,
	renderTelaError,
	ValidandoEmail,
	ValidandoSenha
}