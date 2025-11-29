import { db } from '../config/firestore.js'
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
import { mensagem } from '../utils/mensagem.js';

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    const idInputTask = document.getElementById('idInputTask');
    const buttonTask = document.getElementById('button-task');

    buttonTask.addEventListener('click', async () => {
        const eventInput = idInputTask.value.trim()

        if (eventInput) {
            document.querySelector('#idInputTask').value = '';
            
            const userId = auth.currentUser.uid;
            
            try {

                await addDoc(collection(db, `teste-list/${userId}/todolist`), {
                    input: eventInput,
                    taskCheck: ""
                })

                mensagem('Tarefa Criada com Sucesso!');

            } catch (e) {
                console.error('addDoc', e)
            }

        }
    })    
})