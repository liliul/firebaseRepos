/**
 * @param {string} mensagem
 * @descrition É a mensagem da função msSucefull
 * */

export function mensagem(mensagem) {
	const divMensagem = document.createElement('div');
    divMensagem.setAttribute('id', 'mensagem');
    divMensagem.innerHTML = `${msSucefull(mensagem)}`;
    
    document.querySelector('body').appendChild(divMensagem);

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