// id
const container = document.getElementById('container')
const content   = document.getElementById('content')
const addUserGithub = document.querySelector('[data-js="add-user"]')
const updateUserGithub = document.querySelector('[data-js="up-user"]')

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// console.log(firebaseApp)

db.collection('userGithub').get()
	.then((snapshot) => {
		const mostrarDocs = snapshot.docs.forEach(doc => {
			const {name, createdAt} = doc.data()

			const docsHtml = `
				<section class="card" data-card="${doc.id}">
					<h1>${name}</h1>
					<br>
					<span class="data">${createdAt.toDate()}</span>
					<hr>
					<button data-remove="${doc.id}">Deletar</button>
				</section>
			` 
			content.innerHTML += docsHtml
	})
}).catch((err) => {
		console.log(err.menssage)
})


addUserGithub.addEventListener('submit', (e) => {
	e.preventDefault()

	db.collection('userGithub').add({
		name: e.target.user.value,
		createdAt: firebase.firestore.FieldValue.serverTimestamp()
	})
	.then(() => {
		console.log('add sucessFull')
	}).catch(err => {
		console.log(err.menssage)
	})
})

updateUserGithub.addEventListener('submit', (e) => {
	e.preventDefault()

	db.collection('userGithub').doc('RS4o4QiumsrDxooAQkCQ').update({
		name: e.target.upUser.value,
		createdAt: firebase.firestore.FieldValue.serverTimestamp()
	})
	.then(() => {
		console.log('update sucessFull')
	}).catch(err => {
		console.log(err.menssage)
	})
})

content.addEventListener('click', (e) => {
	db.collection('userGithub').doc('nVcokFnR04QdsOEs7rxb').delete()
		.then(() => {
			console.log('delete sucessFull')
		}).catch((err) => {
			console.log(err)
		})
})