export function mensagem() {
	const divMensagem = document.createElement('div')
    divMensagem.setAttribute('id', 'mensagem')
    divMensagem.innerHTML = `${msSucefull('Tarefa Criada com Sucesso!')}`
    
    document.querySelector('body').appendChild(divMensagem);

    setTimeout(() => {
        document.getElementById('mensagem').remove();
    },2500)
    // console.log('mensagem: ', msSucefull("Tarefa Criada com Sucesso."))
}

export function msSucefull(mensagem) {
	return (`
		<section class="m-container">
			<h3 class="m-texto">${mensagem}</h3>
		</section>
	`)
}