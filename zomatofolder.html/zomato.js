import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzEp1vstPTlp_puLp7jd3NReVsrNhNSzc",
  authDomain: "zomato-9b9d1.firebaseapp.com",
  projectId: "zomato-9b9d1",
  storageBucket: "zomato-9b9d1.appspot.com",
  messagingSenderId: "945133448016",
  appId: "1:945133448016:web:08de7ef9975416cf2a5a55",
  measurementId: "G-RFVLS5VS1K",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signUp() {
  let email = document.querySelector(".email1").value;
  let password = document.querySelector(".password105").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}
