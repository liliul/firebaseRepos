content.addEventListener('click', (e) => {
	const remove = e.target.dataset.remove
	
	if (remove) {
		db.collection('infos-github').doc(remove).delete()
		.then(() => {
			// const removeHtml = document.querySelector(`[data-card="${remove}"]`)
			// removeHtml.remove()
			
			console.log('delete sucessFull')
		})
		.catch((err) => {
			console.log(err)
		})	
	}
	
})