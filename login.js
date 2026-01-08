import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// 🔹 Replace with your Firebase config
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zwF2-h_TcaxCstMMB0wgDy_ocD0JGjs",
  authDomain: "khalil-corporation.firebaseapp.com",
  projectId: "khalil-corporation",
  storageBucket: "khalil-corporation.firebasestorage.app",
  messagingSenderId: "723116525816",
  appId: "1:723116525816:web:933d20fd3c3ab1c1e9930d",
  measurementId: "G-VD78B9YR11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// Buttons
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");


// Register
registerBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
  } catch (error) {
    alert(error.message);
  }
});

// Login
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "chat.html";
  } catch (error) {
    alert(error.message);
  }
});

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("You have been logged out!");
    window.location.href = "login.html"; // go back to login page
  } catch (error) {
    console.error(error);
    alert(error.message);





// 3D Tilt effect for login container
const container = document.querySelector('.login-container');
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  const maxTilt = 10;

  const rotateX = deltaY * maxTilt * -1;
  const rotateY = deltaX * maxTilt;

  
});
  }
});