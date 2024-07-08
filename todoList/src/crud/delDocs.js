import { db } from '../config/firestore.js';
import { doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { mensagem } from '../utils/mensagem.js';

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    const containerAddTask = document.querySelector('.main_content');

    containerAddTask.addEventListener('click', async (e) => {
        const eventDel = e.target.dataset.delete;
        const userId = auth.currentUser.uid;

        if (eventDel) {
            await deleteDoc(doc(db, `teste-list/${userId}/todolist/`, eventDel));

            mensagem('Tarefa Deletada com Sucesso');
        }
    })
})
