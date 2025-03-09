import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { UserProvider } from "./context/user.context.jsx";
import {ProductsProvider} from "./context/products.context.jsx";
import './index.scss'
import {CartProvider} from "./context/cart.context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </StrictMode>,
)
