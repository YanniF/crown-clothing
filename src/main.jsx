import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { UserProvider } from "./context/user.context.jsx";
import './index.scss'
import {ProductsProvider} from "./context/products.context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </StrictMode>,
)
