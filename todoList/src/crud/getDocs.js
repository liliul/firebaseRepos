import { db } from '../config/firestore.js'
import { collection, getDocs} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'

export const querySnapshot = await getDocs(collection(db, "todo-list"));
 querySnapshot.forEach((doc) => {
    console.log(`${doc.id}`);
 });
