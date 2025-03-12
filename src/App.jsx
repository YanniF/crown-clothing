import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Auth from "./routes/auth/auth.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
