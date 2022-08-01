import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./componets/Signin";
import Signup from "./componets/Signup";
import Account from "./componets/Account";
import Navbar from "./componets/navbar";
import Cart from "./componets/cart";
import ProtectedRoute from "./componets/protectedRoute";

import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  //Navbar Cart
  const [cart, setCart] = useState([]);

  return (
    <AuthContextProvider>
      <>
        <Navbar cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account setCart={setCart} cart={cart} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
    </AuthContextProvider>
  );
}
