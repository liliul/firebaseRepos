import { db } from '../config/firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

// let email = 'gokufirestore@email.com'
// let password = '123456'

// let email = 'narutofirestore@email.com'
// let password = '101919'

const authSignIn = document.querySelector('[data-authentication="auth"]')

const iconSelect = `
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>checkbox-checked</title>
<path fill="green" d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"></path>
</svg>
`
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
	   	document.querySelector('.h2-login').innerHTML = `<i>${iconSelect}</i>`;
	   	
	    setTimeout(() => {
	      window.location = './todoList.html';
	    }, 3000)
	})
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	   	console.log('e1', errorCode, 'e2', errorMessage)
	});
	// console.log('sign', email, password)
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


// // deslogado
// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });