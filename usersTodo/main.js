// Importando módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD63f-2H_x9R209p8ufzqAY-7cgyp9Ob2M",
  authDomain: "userstodo-3c20f.firebaseapp.com",
  projectId: "userstodo-3c20f",
  storageBucket: "userstodo-3c20f.appspot.com",
  messagingSenderId: "164337943656",
  appId: "1:164337943656:web:6de1ee07d018d91e1da7dd"
};

// Inicialização do Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Obter instâncias dos serviços do Firebase
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
console.log(db)

// const email = 'gokufirestore@email.com';
// const password = '123456';

const email = 'narutofirestore@email.com';
const password = '123456';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Usuário autenticado com sucesso
    const user = userCredential.user;
    console.log('Usuário logado:', user.uid);

   // Adicionar uma Todolist para o usuário atual
   //  function addTodolist(title, check) {
   //      const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
   //      return addDoc(collection(db, `teste-todo/${userId}/todolists`), {
   //          input: title,
   //          taskCheck: check // Inicialmente vazio
   //      });
   //  }
   //
   // // Exemplo de uso
   //  addTodolist('todo-list do email do naruto', "")
   //    .then(docRef => {
   //      console.log('Todolist adicionada com ID:', docRef.id);
   //    })
   //    .catch(error => {
   //      console.error('Erro ao adicionar Todolist:', error);
   //    });


    // Atualizar o estado de conclusão de uma tarefa
  //   function updateTaskCompletion(todolistId, input, check) {
  //       const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
  //       const taskRef = doc(db, `teste-todo/${userId}/todolists/${todolistId}`);
  //       return updateDoc(taskRef, {
  //           input: input,
  //           taskCheck: check
  //       });
  //   }
  //
  //   // Exemplo de uso
  //   updateTaskCompletion('GGvr9nWVq7Xa1wQBo36i', 'Som goku', 'checked')
  //     .then(() => {
  //       console.log('Estado de conclusão da tarefa atualizado com sucesso');
  //     })
  //     .catch(error => {
  //       console.error('Erro ao atualizar estado de conclusão da tarefa:', error);
  //     });


    // Obtém Todolists do usuário atual
    // function getTodolists() {
    //     const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
    //     return getDocs(collection(db, `teste-todo/${userId}/todolists`));
    // }
    //
    // // Exemplo de uso
    // getTodolists()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.id, '=>', doc.data());
    //     });
    //   })
    //   .catch(error => {
    //     console.error('Erro ao obter Todolists:', error);
    //   });


    // Excluir uma tarefa de um Todolist
  //   function deleteTask(todolistId) {
  //       const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
  //       const taskRef = doc(db, `teste-todo/${userId}/todolists/${todolistId}`);
  //       return deleteDoc(taskRef);
  //   }
  //
  //   // Exemplo de uso
  //   deleteTask('WX9NGxn5XZ7xVCq57sRD')
  //     .then(() => {
  //       console.log('Tarefa excluída com sucesso');
  //     })
  //     .catch(error => {
  //       console.error('Erro ao excluir tarefa:', error);
  //     });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Erro ao fazer login:', errorMessage);
  });


// // Adicionar uma Todolist para o usuário atual
// function addTodolist(title) {
//     const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
//     return addDoc(collection(db, `teste-todo/${userId}/todolists`), {
//         input: title,
//         taskCheck: [] // Inicialmente vazio
//     });
// }

// // Exemplo de uso
// addTodolist('Minha Lista')
//   .then(docRef => {
//     console.log('Todolist adicionada com ID:', docRef.id);
//   })
//   .catch(error => {
//     console.error('Erro ao adicionar Todolist:', error);
//   });


// Obtém Todolists do usuário atual
// function getTodolists() {
//     const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
//     return getDocs(collection(db, `teste-todo/${userId}/todolists`));
// }
//
// // Exemplo de uso
// getTodolists()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch(error => {
//     console.error('Erro ao obter Todolists:', error);
//   });


// Atualizar o estado de conclusão de uma tarefa
// function updateTaskCompletion(todolistId, taskId, completed) {
//     const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
//     const taskRef = doc(db, `teste-todo/${userId}/todolists/${todolistId}/tasks/${taskId}`);
//     return updateDoc(taskRef, {
//         completed: completed
//     });
// }

// // Exemplo de uso
// updateTaskCompletion('todolistId', 'taskId', true)
//   .then(() => {
//     console.log('Estado de conclusão da tarefa atualizado com sucesso');
//   })
//   .catch(error => {
//     console.error('Erro ao atualizar estado de conclusão da tarefa:', error);
//   });


// Excluir uma tarefa de um Todolist
// function deleteTask(todolistId, taskId) {
//     const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
//     const taskRef = doc(db, `teste-todo/${userId}/todolists/${todolistId}/tasks/${taskId}`);
//     return deleteDoc(taskRef);
// }

// // Exemplo de uso
// deleteTask('todolistId', 'taskId')
//   .then(() => {
//     console.log('Tarefa excluída com sucesso');
//   })
//   .catch(error => {
//     console.error('Erro ao excluir tarefa:', error);
//   });
