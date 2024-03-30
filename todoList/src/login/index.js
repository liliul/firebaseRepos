import { db } from '../config/firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import { utils } from '../utils/utils.js';

// let email = 'gokufirestore@email.com'
// let password = '123456'

// let email = 'narutofirestore@email.com'
// let password = '101919'

const authSignIn = document.querySelector('[data-authentication="auth"]')

// fazer login
authSignIn.addEventListener('submit', (event) => {
	event.preventDefault();

	const email    = event.target.Email.value.trim();
	const password = event.target.PassWord.value.trim();

	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => { 
	    const user = userCredential.user;
	   	console.log('auth ', user.uid)
	   	document.querySelector('.h2-login').innerHTML = `<i>${utils.iconSelect}</i>`;
	   	
	    setTimeout(() => {
	      window.location = './todoList.html';
	    }, 3000)
	})
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	   	console.log('e1', errorCode, 'e2', errorMessage)
	});
})
	

// criar uma conta
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
