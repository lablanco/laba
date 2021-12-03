import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Enter from './pages/Enter';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from 'react'

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Pay />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Enter />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
