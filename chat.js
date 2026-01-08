import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// 🔹 Firebase config (same as login.js)
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

const welcomeText = document.getElementById("welcomeText");
const logoutBtn = document.getElementById("logoutBtn");

// 🔹 Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    welcomeText.innerText = Hello, ${user.email}!;
  } else {
    window.location.href = "login.html"; // redirect if not logged in
  }
});

// 🔹 Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});