import { db } from '../config/firestore.js';
import { collection, onSnapshot, getCountFromServer} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';


const onSnap = (callback) => onSnapshot(collection(db, 'todo-list'), callback);

window.addEventListener('DOMContentLoaded', () => {
	onSnap(querySnapshot => {
		// document.querySelector('#add-task').innerHTML = ''
		let counter = 0;
		let counter2 = 0;
		querySnapshot.forEach((doc) => {
			const { input, taskCheck } = doc.data();
			if (input) {
				document.getElementById('task-create').innerText = counter++ + 1;
			}
			if (!input) {
				document.getElementById('task-create').innerText = 0;
			}			
			// console.log('aa', input, taskCheck, counter++)
			if(taskCheck) {
				document.querySelector('.completed-counter').innerText = counter2++ + 1;
			}
		})

	})
})





// const onSnap = () => onSnapshot(collection(db, 'todo-list');
// console.log(onSnap())


// export async function gg() {
// 	const coll = collection(db, "todo-list");
// 	const snapshot = await getCountFromServer(coll);
// 	console.log('count: ', snapshot.data().count);
// 	document.getElementById('task-create').innerText = snapshot.data().count
// }

// const createTasksLength = (input) => {
// 	let counter = 0;
// 	console.log(input)
// 	// input.forEach((list) => {
// 	// 	console.log(list)
// 	// 	// if (list > 0) {
// 	// 	// 	document.getElementById('task-create').innerText = 12;		
// 	// 	// }
// 	// })
// }

// export default createTasksLength;