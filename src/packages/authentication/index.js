// Assuming this is in a file like auth.js
import { auth } from '../firebase-config'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";

const authentication = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in user:", userCredential.user);
    // Return the user object upon successful login
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export default authentication;