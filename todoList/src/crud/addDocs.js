import { db } from '../config/firestore.js'
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'


// id no html
const idInputTask = document.getElementById('idInputTask');
const buttonTask = document.getElementById('button-task');

buttonTask.addEventListener('click', async () => {
    const eventInput = idInputTask.value.trim()

    if (eventInput) {
        console.log(eventInput)

        try {
            const adicionarDocs = await addDoc(collection(db, 'todo-list'), {
                input: eventInput,
                taskCheck: 'checked'
            })
            console.log('id', adicionarDocs.id)
        } catch (e) {
            console.error('addDoc', e)
        }

    }
})
