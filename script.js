import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



// 🔥 Replace with YOUR Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMnL9mGuIP-yl_J9X0Cp79Xa0xwjyBc78",
  authDomain: "login-68e3b.firebaseapp.com",
  projectId: "login-68e3b",
  storageBucket: "login-68e3b.firebasestorage.app",
  messagingSenderId: "396330798747",
  appId: "1:396330798747:web:526fe9c456bbe86418003e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
window.signup = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("msg").innerText = "Signup successful ✅";
    })
    .catch(error => {
      document.getElementById("msg").innerText = error.message;
    });
};

// Login
window.login = function () {
  // let username = document.querySelector(".user").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("txt").value;

  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  // ✅ Redirect to home page
  window.location.href = "home_page.html";
})

    .catch(error => {
      document.getElementById("msg").innerText = error.message;
    });
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};


