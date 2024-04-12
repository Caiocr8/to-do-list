import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase-config"; // Ajuste o caminho conforme necessário

async function registerUser(email, password, name, age) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "Users", user.uid), {
    name,
    email,
    age,
  });

  return user; // Retornando o usuário recém-criado ou você pode retornar apenas o UID se preferir
}

export default registerUser;