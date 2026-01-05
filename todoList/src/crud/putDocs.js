import { db } from '../config/firestore.js';
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (!user) return

    const containerAddTask = document.querySelector('.main_content');

    containerAddTask.addEventListener('change', async (e) => {
        const eventCheck = e.target.dataset.checked;
        const userId = user.uid;

        if (eventCheck) {
            const checkRef = doc(db, `teste-list/${userId}/todolist/`, eventCheck);

            const checkedbox = document.querySelector(`[data-checked="${eventCheck}"]`).checked;
            const checked = checkedbox ? "checked" : "";

            await updateDoc(checkRef, {
                taskCheck: checked
            })
        }
    })    
})

