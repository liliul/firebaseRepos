// id
const container = document.getElementById('container')
const content   = document.getElementById('content')
const addUserGithub = document.querySelector('[data-js="add-user"]')
const updateUserGithub = document.querySelector('[data-js="up-user"]')

// https://firebase.google.com/docs/web/modular-upgrade?hl=pt#window-compat
const firebaseConfig = {
	apiKey: "AIzaSyAQg4btb7xBFNoaL4C-TWarZxMOQPxRdF0",
	authDomain: "user-github.firebaseapp.com",
	projectId: "user-github",
	storageBucket: "user-github.appspot.com",
	messagingSenderId: "921139920558",
	appId: "1:921139920558:web:1309e906441151746ff73f",
	measurementId: "G-L7146BC1WM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// console.log(firebaseApp)
