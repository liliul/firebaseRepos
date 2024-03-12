db.collection('infos-github').onSnapshot((doc) => {
	content.innerHTML = ''

	doc.docs.map((doc) => {
		console.log(doc.data())
		if (!doc.metadata.hasPendingWrites) {
			const {id, name, login, avatar, createdAt} = doc.data()
			const docsHtml = document.createElement('div')
			docsHtml.innerHTML = `
				<section class="card" data-card="${doc.id}">
					<p>id: ${id}</p>
					<article class="infos-github">
						
						<img
						 style="width:80px;height:80px;border-radius:50%;"
						 src="${avatar}"
						/>

						<h1>${name}</h1>
						<p>${login}</p>

					</article>
					<span class="data">${createdAt.toDate()}</span>
					<br>
					<button data-remove="${doc.id}">Deletar</button>
					<button id="editarDocs" data-editar="${doc.id}">Editar</button>
				</section>
			` 
			content.appendChild(docsHtml)
		}	
	})
})