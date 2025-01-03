import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYf7evrsKbudTq3lGU6AKsX-SV6Ew6ImA",
    authDomain: "start-up-85ab5.firebaseapp.com",
    projectId: "start-up-85ab5",
    storageBucket: "start-up-85ab5.firebasestorage.app",
    messagingSenderId: "501099450648",
    appId: "1:501099450648:web:4e77be94fee4ae863e0e6d",
    measurementId: "G-FCJESNLF6N"
  };

const app = initializeApp(firebaseConfig);

// Get the form elements
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");

// Form submission handler
document.querySelector(".send-button").addEventListener("click", (e) => {
    e.preventDefault();

    // Validate form fields
    if (nameInput.value === "" || surnameInput.value === "" || emailInput.value === "" || messageInput.value === "" || !consentCheckbox.checked) {
        alert("Please fill all the fields and give consent.");
        return;
    }

    // Create an object to store the form data
    const formData = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        consent: consentCheckbox.checked,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Save form data to Firestore
    db.collection("messages")
        .add(formData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Your message has been sent successfully!");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("There was an error sending your message. Please try again.");
        });
});