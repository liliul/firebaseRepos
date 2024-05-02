import { db } from '../config/firestore.js';
import { doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { mensagem } from '../utils/mensagem.js';

const containerAddTask = document.querySelector('.main_content');

containerAddTask.addEventListener('click', async (e) => {
    const eventDel = e.target.dataset.delete;

    if (eventDel) {
        await deleteDoc(doc(db, "todo-list", eventDel));

        mensagem('Tarefa Deletada com Sucesso');
    }
})


