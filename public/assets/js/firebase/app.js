import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });