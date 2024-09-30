import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
