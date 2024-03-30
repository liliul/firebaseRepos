import { db } from '../config/firestore.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector('.formLogin').style.display = 'flex';

    document.querySelector('.s-email').textContent = user.email;

    const deslogar = document.querySelector('.b-signOut');
    deslogar.addEventListener('click', () => {
    
    	const auth = getAuth();
		signOut(auth).then(() => {
    		document.querySelector('.formLogin').style.display = 'none';
    		window.location.href = './index.html';
		}).catch((error) => {
			console.log('Erro ao deslogar', error)
		});
    })
  } else {
    console.log("Nenhum usuário está logado.");
  }
});