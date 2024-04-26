// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
  // https://firebase.google.com/docs/web/alt-setup?authuser=0&hl=pt#from-the-cdn

  // informações do firebase
  import { api } from '../../env.js';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: api.API_KEY,
    authDomain: api.AUTHDOMAIN,
    projectId: api.PROJECTID,
    storageBucket: api.STORAGEBUCKET,
    messagingSenderId: api.MESSAGINGSENDERID,
    appId: api.APPID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  console.log(db)
