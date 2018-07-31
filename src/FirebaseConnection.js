import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCRzwfkxIWpcp1eUZe-MqcYJuFJyIj_-xw",
    authDomain: "projeto-teste-4a43b.firebaseapp.com",
    databaseURL: "https://projeto-teste-4a43b.firebaseio.com",
    projectId: "projeto-teste-4a43b",
    storageBucket: "projeto-teste-4a43b.appspot.com",
    messagingSenderId: "154903476456"
  };
  firebase.initializeApp(config);

  export default firebase;