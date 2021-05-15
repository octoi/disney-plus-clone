import firebase from 'firebase';
import firebaseConfig from './utils/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }