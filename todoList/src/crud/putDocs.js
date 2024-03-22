import { db } from '../config/firestore.js';
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

const containerAddTask = document.querySelector('.main_content');

containerAddTask.addEventListener('change', async (e) => {
    const eventCheck = e.target.dataset.checked;

    if (eventCheck) {
        const checkRef = doc(db, "todo-list", eventCheck);

        const checkedbox = document.querySelector(`[data-checked="${eventCheck}"]`).checked;
        const checked = checkedbox ? "checked" : "";

        await updateDoc(checkRef, {
            taskCheck: checked
        })
    }
})
