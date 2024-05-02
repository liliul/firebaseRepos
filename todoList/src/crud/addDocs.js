import { db } from '../config/firestore.js'
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
import { mensagem } from '../utils/mensagem.js';

const idInputTask = document.getElementById('idInputTask');
const buttonTask = document.getElementById('button-task');

buttonTask.addEventListener('click', async () => {
    const eventInput = idInputTask.value.trim()

    if (eventInput) {
        document.querySelector('#idInputTask').value = '';
        
        try {

            const adicionarDocs = await addDoc(collection(db, 'todo-list'), {
                input: eventInput,
                taskCheck: ""
            })

            mensagem('Tarefa Criada com Sucesso!');

        } catch (e) {
            console.error('addDoc', e)
        }

    }
})
