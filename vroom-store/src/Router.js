import React from "react";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import WishlistPage from "./pages/WishlistPage";

import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import HeaderSection from "./layout/HeaderSection";
import FooterSection from "./layout/FooterSection";
import ContextManager from "./ContextManager";

const Router = () => {
   return (
      <HashRouter>
         <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
               path="/home"
               element={<ContextManager page={<HomePage />} />}
            />
            <Route
               path="/products"
               element={<ContextManager page={<ProductsPage />} />}
            />
            <Route
               path="/product/:carId"
               element={<ContextManager page={<ProductPage />} />}
            ></Route>
            <Route
               path="/cart"
               element={<ContextManager page={<CartPage />} />}
            />
            <Route
               path="/wishlist"
               element={<ContextManager page={<WishlistPage />} />}
            />
         </Routes>
      </HashRouter>
   );
};

export default Router;
