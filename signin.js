// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAipmoVwjnMTLGZ1AuHS_aGOnzYhWjNrwY",
    authDomain: "team-josh1.firebaseapp.com",
    projectId: "team-josh1",
    storageBucket: "team-josh1.appspot.com",
    messagingSenderId: "402506151720",
    appId: "1:402506151720:web:623e632b28f2688a1f021d",
    measurementId: "G-DHN7RTGXTV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth(app);

// inputs
const email=document.getElementById('mail');
const username =document.getElementById('username');
const password=document.getElementById('pass');
const mainForm=document.getElementById('mainForm');

// submit
const RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((credentials)=>{
        console.log(credentials);
    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.message);
    })
}

mainForm.addEventListener('submit',RegisterUser);