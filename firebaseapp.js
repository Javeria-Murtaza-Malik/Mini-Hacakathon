import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration

   
const firebaseConfig = {
    apiKey: "AIzaSyD_6E_BM6vT3z_kgYrM_vFxefk7Kn0zgDc",
    authDomain: "minihackathon-186bc.firebaseapp.com",
    projectId: "minihackathon-186bc",
    storageBucket: "minihackathon-186bc.firebasestorage.app",
    messagingSenderId: "646290995986",
    appId: "1:646290995986:web:5f78574592fd2cfde991cb"
  };
      


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function addData() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;
    try {
        const DocRef= await addDoc(collection(db,"usersId"),{
          name:name,
          surname:surname,
          email:email,
          message:message,
          consent:consent

        })
     alert("Your message has been sent successfully!")
    } catch (error) {
        console.log(error);
        
    }
}

const addBtn=document.querySelector('#submitButton');
addBtn.addEventListener('click',addData)