// Importando módulos do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID'
};

// Inicialização do Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Obter instâncias dos serviços do Firebase
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


const email = 'user@example.com';
const password = 'password123';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Usuário autenticado com sucesso
    const user = userCredential.user;
    console.log('Usuário logado:', user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Erro ao fazer login:', errorMessage);
  });


// Adicionar uma Todolist para o usuário atual
function addTodolist(title) {
    const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
    return addDoc(collection(db, `users/${userId}/todolists`), {
        title: title,
        tasks: [] // Inicialmente vazio
    });
}

// Exemplo de uso
addTodolist('Minha Lista')
  .then(docRef => {
    console.log('Todolist adicionada com ID:', docRef.id);
  })
  .catch(error => {
    console.error('Erro ao adicionar Todolist:', error);
  });


// Obtém Todolists do usuário atual
function getTodolists() {
    const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
    return getDocs(collection(db, `users/${userId}/todolists`));
}

// Exemplo de uso
getTodolists()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(error => {
    console.error('Erro ao obter Todolists:', error);
  });


// Atualizar o estado de conclusão de uma tarefa
function updateTaskCompletion(todolistId, taskId, completed) {
    const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
    const taskRef = doc(db, `users/${userId}/todolists/${todolistId}/tasks/${taskId}`);
    return updateDoc(taskRef, {
        completed: completed
    });
}

// Exemplo de uso
updateTaskCompletion('todolistId', 'taskId', true)
  .then(() => {
    console.log('Estado de conclusão da tarefa atualizado com sucesso');
  })
  .catch(error => {
    console.error('Erro ao atualizar estado de conclusão da tarefa:', error);
  });


// Excluir uma tarefa de um Todolist
function deleteTask(todolistId, taskId) {
    const userId = auth.currentUser.uid; // Obtém o ID do usuário autenticado
    const taskRef = doc(db, `users/${userId}/todolists/${todolistId}/tasks/${taskId}`);
    return deleteDoc(taskRef);
}

// Exemplo de uso
deleteTask('todolistId', 'taskId')
  .then(() => {
    console.log('Tarefa excluída com sucesso');
  })
  .catch(error => {
    console.error('Erro ao excluir tarefa:', error);
  });
