/**
 * @param {string} mensagem
 * @descrition É a mensagem da função msSucefull
 * */

export function mensagem(mensagem) {
	const divMensagem = document.createElement('div');
    divMensagem.setAttribute('id', 'mensagem');
    divMensagem.innerHTML = `${msSucefull(mensagem)}`;
    
    document.querySelector('#conteinerDeMensagens').appendChild(divMensagem);

    setTimeout(() => {
        document.getElementById('mensagem').remove();
    },2500)
}

/**
 * @param {string} mensagem em texto
 * @returns {string} de texto
 * */
export function msSucefull(mensagem) {
	return (`
		<section class="m-container">
			<h3 class="m-texto">${mensagem}</h3>
		</section>
	`)
}

/**
 * @description mensagem para verificar email no firebase authentication
 * 
 * @param {elementHtml} elemento id class ou tag no querySelector
 * @param {string} mensagem da function emailVerificadoHtml
 * */
export function emailVerificadoMensagem(element, mensagem) {
	if (document.getElementById('emailVerificadoMensagem')) return

	const sectionMensagem = document.createElement('section');
	sectionMensagem.setAttribute('id', 'emailVerificadoMensagem');
	sectionMensagem.innerHTML = `${emailVerificadoHtml(mensagem)}`;

	document.querySelector(element).insertAdjacentElement('beforebegin', sectionMensagem);

	setTimeout(() => {
        document.getElementById('emailVerificadoMensagem').remove();
    }, 4000)
}

export function emailVerificadoHtml(mensagem) {
	return (`
		<section class="veri-email-container">
			<h3 class="veri-email-texto">${mensagem}</h3>
		</section>
	`)
}
