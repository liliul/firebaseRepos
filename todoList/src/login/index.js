import { db } from '../config/firestore.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

// let email = 'gokufirestore@email.com'
// let password = '123456'

// let email = 'narutofirestore@email.com'
// let password = '101919'

// fazer login
// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => { 
//     const user = userCredential.user;
//    	console.log('auth ', user.uid)
   	
//     setTimeout(() => {
//       window.location = './index2.html';
//     }, 3000)
// })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//    	console.log('e1', errorCode, 'e2', errorMessage)
// });


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