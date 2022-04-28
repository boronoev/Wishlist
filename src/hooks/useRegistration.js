import { useContext } from "react";
import FirebaseContext from "../contexts/firebase.context";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export default function useRegistration () {
  const app = useContext(FirebaseContext);
  const auth = getAuth(app);

  return createUserWithEmailAndPassword.bind(null, auth)
  
}
