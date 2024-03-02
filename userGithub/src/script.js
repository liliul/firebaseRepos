// id
const container = document.getElementById('container')
const content   = document.getElementById('content')
const addUserGithub = document.querySelector('[data-js="add-user"]')
const updateUserGithub = document.querySelector('[data-js="up-user"]')

// https://firebase.google.com/docs/web/modular-upgrade?hl=pt#window-compat
const firebaseConfig = {
	apiKey: "AIzaSyAQg4btb7xBFNoaL4C-TWarZxMOQPxRdF0",
	authDomain: "user-github.firebaseapp.com",
	projectId: "user-github",
	storageBucket: "user-github.appspot.com",
	messagingSenderId: "921139920558",
	appId: "1:921139920558:web:1309e906441151746ff73f",
	measurementId: "G-L7146BC1WM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// console.log(firebaseApp)

// db.collection('userGithub').get()
// 	.then((snapshot) => {
// 		const mostrarDocs = snapshot.docs.forEach(doc => {
// 			const {name, createdAt} = doc.data()

// 			const docsHtml = `
// 				<section class="card" data-card="${doc.id}">
// 					<h1>${name}</h1>
// 					<br>
// 					<span class="data">${createdAt.toDate()}</span>
// 					<hr>
// 					<button data-remove="${doc.id}">Deletar</button>
// 					<button id="editarDocs" data-editar="${doc.id}">Editar</button>
// 				</section>
// 			` 
// 			content.innerHTML += docsHtml
// 	})
// }).catch((err) => {
// 		console.log(err.menssage)
// })


addUserGithub.addEventListener('submit', async (e) => {
	e.preventDefault()
	if(e.target.user.value === '') return

	await getApiGithub(e.target.user.value)

	db.collection('userGithub').add({
		name: e.target.user.value,
		createdAt: firebase.firestore.FieldValue.serverTimestamp()
	})
	.then(() => {
		e.target.user.value = ''
		console.log('add sucessFull')
	}).catch(err => {
		console.log(err.menssage)
	})
})

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
						<span data-fechar="fechar">fechar</span>
						<label for="upUser">Atualizando Usuario ></label>
						<input type="text" id="upUser" name="upUser" value="${doc.data().name}">
						<p class="vazio"></p>
					</form>
				`
				content.appendChild(modalHtml)
				
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


// content.addEventListener('click', (e) => {
// 	const remove = e.target.dataset.remove
	
// 	if (remove) {
// 		db.collection('userGithub').doc(remove).delete()
// 		.then(() => {
// 			// const removeHtml = document.querySelector(`[data-card="${remove}"]`)
// 			// removeHtml.remove()
			
// 			console.log('delete sucessFull')
// 		})
// 		.catch((err) => {
// 			console.log(err)
// 		})	
// 	}
	
// })

// db.collection('userGithub').onSnapshot((doc) => {
// 	content.innerHTML = ''

// 	doc.docs.map((doc) => {
// 		console.log(doc.data())
// 		if (!doc.metadata.hasPendingWrites) {
// 			const {name, createdAt} = doc.data()
// 			const docsHtml = document.createElement('div')
// 			docsHtml.innerHTML = `
// 				<section class="card" data-card="${doc.id}">
// 					<h1>${name}</h1>
// 					<br>
// 					<span class="data">${createdAt.toDate()}</span>
// 					<hr>
// 					<button data-remove="${doc.id}">Deletar</button>
// 					<button id="editarDocs" data-editar="${doc.id}">Editar</button>
// 				</section>
// 			` 
// 			content.appendChild(docsHtml)
// 		}	
// 	})
// })

// api github
const getApiGithub = async (name) => {
	const req = await fetch(`https://api.github.com/users/${name}`);
	const res =  await req.json();

	return console.log(res)
}	
// getApiGithub('liliul')