import {
  createApp
} from 'vue'
import App from './App.vue'
import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUKF92WlHse8v3PKdtTJ2JEdTrm_zNi2A",
  authDomain: "vue-todo-106ed.firebaseapp.com",
  databaseURL: "https://vue-todo-106ed.firebaseio.com",
  projectId: "vue-todo-106ed",
  storageBucket: "vue-todo-106ed.appspot.com",
  messagingSenderId: "984416820196",
  appId: "1:984416820196:web:dddc12b9373dbbedc585f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).mount('#app')