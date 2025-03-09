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
    return onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      setUser(user)
    })
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
