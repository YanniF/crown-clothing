import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils.js";
import {USER_ACTION_TYPES} from "./action-types.js";

const initialState = {
  user: null,
}

// value you want to access
export const UserContext = createContext({
  user: null,
});

const userReducer = (state, action) => {
  const { type, payload } = action;
  
  if (type === USER_ACTION_TYPES.SET_USER) {
    return {
      ...state,
      user: payload
    };
  }

  throw new Error('Unhandled type "' + type + '" in userReducer');
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { user } = state;

  const setUser = (user) => dispatch({
    type: USER_ACTION_TYPES.SET_USER,
    payload: user,
  })

  useEffect(() => {
    return onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }

      setUser(user)
    })
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}
