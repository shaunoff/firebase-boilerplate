import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCjVYJWeZREz5dM1Z962YN090MqlfwcUhA",
    authDomain: "hanscom-reps.firebaseapp.com",
    databaseURL: "https://hanscom-reps.firebaseio.com",
    projectId: "hanscom-reps",
    storageBucket: "",
    messagingSenderId: "3184110614"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
