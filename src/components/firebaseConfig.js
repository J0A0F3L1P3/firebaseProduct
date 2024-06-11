import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyB8890sv0YPrN1UZ6o94oxwgz-povl02D8",
  authDomain: "etec24-d5e05.firebaseapp.com",
  databaseURL: "https://etec24-d5e05-default-rtdb.firebaseio.com",
  projectId: "etec24-d5e05",
  storageBucket: "etec24-d5e05.appspot.com",
  messagingSenderId: "654710646311",
  appId: "1:654710646311:web:1ca25257a9032073055002",
  measurementId: "G-VRHTJXQ5KH"
};

if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
