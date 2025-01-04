import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration

   
    const firebaseConfig = {
        apiKey: "AIzaSyCYf7evrsKbudTq3lGU6AKsX-SV6Ew6ImA",
        authDomain: "start-up-85ab5.firebaseapp.com",
        projectId: "start-up-85ab5",
        storageBucket: "start-up-85ab5.firebasestorage.app",
        messagingSenderId: "501099450648",
        appId: "1:501099450648:web:4e77be94fee4ae863e0e6d",
        measurementId: "G-FCJESNLF6N"
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
        const DocRef= await addDoc(collection(db,"identity"),{
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