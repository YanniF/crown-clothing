import {createContext, useEffect, useReducer} from 'react'
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.js";
import {CATEGORIES_ACTION_TYPES} from "./action-types.js";

const initialState = {
  categories: {},
}

export const CategoriesContext = createContext({
  categories: {},
})

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  if (type === CATEGORIES_ACTION_TYPES.SET_CATEGORIES) {
    return {
      ...state,
      categories: payload
    };
  }

  throw new Error('Unhandled type "' + type + '" in categoriesReducer');
}

export const CategoriesProvider = ({children}) => {
  const [state, dispatch] = useReducer(categoriesReducer, initialState)

  const setCategories = payload => dispatch({
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    payload
  })

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      setCategories(categoryMap)
    }

    getCategoriesMap()
  }, []);

  return (
    <CategoriesContext.Provider value={{categories: state.categories}}>{children}</CategoriesContext.Provider>
  )
}