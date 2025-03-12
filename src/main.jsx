import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { UserProvider } from "./context/user.context.jsx";
import {CategoriesProvider} from "./context/categories.context.jsx";
import './index.scss'
import {CartProvider} from "./context/cart.context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </StrictMode>,
)
