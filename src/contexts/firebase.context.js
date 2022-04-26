import { createContext } from "react";

const FirebaseContext = createContext(null);
const FirebaseProvider = FirebaseContext.Provider;

export default FirebaseContext;
export { FirebaseProvider }

