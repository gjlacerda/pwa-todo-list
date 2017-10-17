import firebase from 'firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyBd-OuGGARMBhFJ19pLLviOjBvYwxoE4Fw',
    authDomain: 'todo-list-c6d36.firebaseapp.com',
    databaseURL: 'https://todo-list-c6d36.firebaseio.com',
});
const database = firebase.database();

export default database;