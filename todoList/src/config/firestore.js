// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js'
  // https://firebase.google.com/docs/web/alt-setup?authuser=0&hl=pt#from-the-cdn


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAGKFgO7myWz9FsQhvsG6CsawgzYJtOLjI",
    authDomain: "todolist-1ca60.firebaseapp.com",
    projectId: "todolist-1ca60",
    storageBucket: "todolist-1ca60.appspot.com",
    messagingSenderId: "498722297052",
    appId: "1:498722297052:web:808bff14dd8b2dfb85d019"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  console.log(db)
