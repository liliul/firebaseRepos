import { db } from '../config/firestore.js';
import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
	const userId = auth.currentUser.uid;
	const onSnap = (callback) => onSnapshot(collection(db, `teste-list/${userId}/todolist/`), callback);

	onSnap(querySnapshot => {
		
		let counter  = 0;
		let counter2 = 0;

		if (querySnapshot.size === 0) {
			document.getElementById('task-create').innerText = counter;
			document.querySelector('.completed-counter').innerText = counter2;

			document.getElementById('add-task').innerHTML = `
				<div class="articles-void">
					<span class="void-icon">
						<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<rect width="56" height="56" fill="url(#pattern0)"/>
						<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlink:href="#image0_43_191" transform="scale(0.01)"/>
						</pattern>
						<image id="image0_43_191" width="100" height="100" xlink:href="data:image/png;base64,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"/>
						</defs>
						</svg>
					</span>
					<p class="void-p">Você ainda não tem tarefas cadastradas</p>
					<small class="void-small">Crie tarefas e organize seus itens a fazer</small>
				</div> 
			`;	
		}

		if (querySnapshot.size > 0) {
			querySnapshot.forEach((doc) => {
				const { input, taskCheck } = doc.data();

				if (input) {
					document.getElementById('task-create').innerText = counter++ + 1;
				}
				
				if (taskCheck) {
					document.querySelector('.completed-counter').innerText = counter2++ + 1;
				} else {
					document.querySelector('.completed-counter').innerText = counter2;
				}
			})
		}

	})

})
