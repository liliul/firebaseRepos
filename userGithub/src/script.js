// id
const container = document.getElementById('container')

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
			container.innerHTML += docsHtml
	})
}).catch((err) => {
		console.log(err.menssage)
})