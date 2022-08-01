import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Navbar({ cart, setCart }) {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  //Log out
  async function handleLogout() {
    try {
      await logout();
      navigate("/");

      function clearCart() {
        setCart([]);
      }

      clearCart();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <nav class="navbar navbar-expand-xl my-nav">
      <div class="container">
        <a class="navbar-brand">
          <i class="bi bi-cart-check-fill"></i> DEALKART
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                class="nav-link px-3 py-2 mx-2 "
                aria-current="page"
                to="/account"
              >
                SHOP
              </Link>
            </li>

            {user && (
              <li class="nav-item">
                <Link
                  onClick={handleLogout}
                  class="nav-link active nav-link px-3 py-2 mx-2"
                  to="/account"
                >
                  LOGOUT
                </Link>
              </li>
            )}

            <li class="nav-item">
              <Link
                class="btn btn-cart nav-link px-3 py-2 mx-2"
                type="submit"
                to="/cart"
              >
                Cart <i class="bi bi-cart-check-fill"></i>
                <span> {cart.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
