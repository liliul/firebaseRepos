// id
const container = document.getElementById('container')
const content   = document.getElementById('content')
const addUserGithub = document.querySelector('[data-js="add-user"]')

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// console.log(firebaseApp)

db.collection('userGithub').get()
	.then((snapshot) => {
		const mostrarDocs = snapshot.docs.forEach(doc => {
			const {name, createdAt} = doc.data()

			const docsHtml = `
				<section class="card">
					<h1>${name}</h1>
					<br>
					<span class="data">${createdAt.toDate()}</span>
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