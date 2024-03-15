addUserGithub.addEventListener('submit', async (e) => {
	e.preventDefault()
	if(e.target.user.value.trim()) {
		console.log(e.target.user.value.trim())			
		
		/**
		 * @function // tras informação do usuario do github
		 *
		 *  
		*/
			//const resApi = await getApiGithub(e.target.user.value)

		/**
		 * // if verifica se nome do usuario é valido se nao retorna alert
		*/
			// if(resApi.message === 'Not Found') {
			// 	return alert('Nome do github invalido')
			// }

			//const result = {'id': resApi.id, 'name': resApi.name}
		/**
		 * // if verifica se id do usuario é undefined e so retorna
		*/
			//if(result.id === undefined) return alert('Id usuario github undefined')
			//console.log(result)
		/**
		 * // if verifica se name do usuario é null e retorna alert
		*/
			//if (result.name === null) return alert('Usuario github null')
		/**
		 * @description // adicionado items no firestore
		*/
		db.collection('userGithub').add({
			name: e.target.user.value.trim(),
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

	return res
}	
// getApiGithub('liliul')