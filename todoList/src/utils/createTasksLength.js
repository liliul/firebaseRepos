import { db } from '../config/firestore.js';
import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';


const onSnap = (callback) => onSnapshot(collection(db, 'todo-list'), callback);

window.addEventListener('DOMContentLoaded', () => {
	onSnap(querySnapshot => {
		
		let counter  = 0;
		let counter2 = 0;

		if (querySnapshot.size === 0) {
			document.getElementById('task-create').innerText = counter;
			document.querySelector('.completed-counter').innerText = counter2;
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
