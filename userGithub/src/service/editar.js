content.addEventListener('click', function(evt) {
	const editarDataset = evt.target.dataset.editar
	console.log(editarDataset)

	if (editarDataset) {
		db.collection('userGithub').doc(editarDataset).get()
			.then((doc) => {
				const modalHtml = document.createElement('section')
				modalHtml.setAttribute('id', 'modal')
				modalHtml.classList.add('modal')

				modalHtml.innerHTML = `
					<form data-js="up-user">
						<span class="fechar">fechar</span>
						<label for="upUser">Editar Usuario</label>
						<input type="text" id="upUser" name="upUser" value="${doc.data().name}">
						<p class="vazio"></p>
					</form>
				`
				content.appendChild(modalHtml)
				
				const modalCard = document.querySelector('.modal')
				modalCard.addEventListener('click', (e) => {
					const eventFechar = e.target.classList[0]

					const classNames = ['fechar','modal']

					const clickClass = classNames.some(className => className === eventFechar)
					if (clickClass) {
						modalCard.remove()
					}
				})

				// updateUser
				const updateUser = document.querySelector('[data-js="up-user"]')

				updateUser.addEventListener('submit', (e) => {
					e.preventDefault()
					if (e.target.upUser.value === ''){

						document.querySelector('.vazio').innerHTML = 'campo vazio'
						return
					}

					db.collection('userGithub').doc(`${editarDataset}`).update({
						name: e.target.upUser.value,
						createdAt: firebase.firestore.FieldValue.serverTimestamp()
					})
					.then(() => {
						const fecharModal = document.querySelector('#modal')
						fecharModal.remove()

						// setTimeout(() => {
						// 	window.location = '/'
						// }, 1000)
	
						console.log('update sucessFull')
					}).catch(err => {
						console.log(err.menssage)
					})
				})			
			})
			.catch((err) => console.log(err.menssage))
	}

})