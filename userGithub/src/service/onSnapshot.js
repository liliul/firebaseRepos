db.collection('userGithub').onSnapshot((doc) => {
	content.innerHTML = ''

	doc.docs.map((doc) => {
		console.log(doc.data())
		if (!doc.metadata.hasPendingWrites) {
			const {name, createdAt} = doc.data()
			const docsHtml = document.createElement('div')
			docsHtml.innerHTML = `
				<section class="card" data-card="${doc.id}">
					<h1>${name}</h1>
					<br>
					<span class="data">${createdAt.toDate()}</span>
					<hr>
					<button data-remove="${doc.id}">Deletar</button>
					<button id="editarDocs" data-editar="${doc.id}">Editar</button>
				</section>
			` 
			content.appendChild(docsHtml)
		}	
	})
})