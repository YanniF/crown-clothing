import {createContext, useState} from "react";

// value you want to access
export const UserContext = createContext({
  user: null,
  setUser: () => null,
});


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
