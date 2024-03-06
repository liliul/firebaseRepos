addUserGithub.addEventListener('submit', async (e) => {
	e.preventDefault()
	if(e.target.user.value.trim()) {
		console.log(e.target.user.value.trim())			
		// await getApiGithub(e.target.user.value)

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
	}

	
})

// api github
const getApiGithub = async (name) => {
	const req = await fetch(`https://api.github.com/users/${name}`);
	const res =  await req.json();

	return console.log(res)
}	
// getApiGithub('liliul')