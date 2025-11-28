import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import { utils } from '../utils/utils.js';

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
  		}).catch((error) => {
  			console.log('Erro ao deslogar', error);
  		});
    })
  } else {
    
    // document.querySelector('body').innerHTML = `
    //   <div style="width:100%;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;">
    //     <h1 style="color:white">Erro você não estar Autenticado no firebase</h1>
    //     <button id="ErroAuth" style="padding:8px 15px;border:none;border-radius:8px;">Voltar para tela de login</button>
    //   </div>
    // `;

    utils.renderTelaError({
      url: './src/views/erro-404.html',
      tag: 'body',
      titlePagina: 'Usuario deslogado',
      mensagem: 'Erro você não estar Autenticado no firebase.',
    }).then(() => {

      document.getElementById('ErroAuth').addEventListener('click', () => {
        window.location.href = './index.html';
      });
    });

  }
});