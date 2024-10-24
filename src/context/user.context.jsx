import {createContext, useState, useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils.js";

// value you want to access
export const UserContext = createContext({
  user: null,
  setUser: () => null,
});


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      setUser(user)
    })

    return unsubscribe
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
