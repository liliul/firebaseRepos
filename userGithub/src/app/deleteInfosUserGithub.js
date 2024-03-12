content.addEventListener('click', (e) => {
	const remove = e.target.dataset.remove
	
	if (remove) {
		db.collection('infos-github').doc(remove).delete()
		.then(() => {
			console.log('delete sucessFull')
		})
		.catch((err) => {
			console.log(err)
		})	
	}
	
})