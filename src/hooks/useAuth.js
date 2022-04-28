import { useContext } from "react";
import FirebaseContext from "../contexts/firebase.context";
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function useAuth () {
  const app = useContext(FirebaseContext);
  const auth = getAuth(app);

  return {
    auth: signInWithEmailAndPassword.bind(null, auth),
    module: auth,
    update: async (data) => {
      return await updateProfile(auth.currentUser, data).catch(e => console.log(e))
    },
  }
}
