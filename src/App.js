import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { Auth } from "./features/Auth/Auth";
import { AuthContextProvider } from "./features/Auth/Auth.context";
import React from "react";
import "./App.css";
import { AuthGuard } from "./components/AuthGuard";
import { ProductList } from "./features/Products/ProductList";
import { ProductDetails } from "./features/Products/ProductDetails";
import { ProductAdd } from "./features/Products/ProductAdd";
import { ProductEdit } from "./features/Products/ProductEdit";
import { Cart } from "./features/Cart/Cart";
import { MacList } from "./features/Mac/macList";
import { HomePageProducts } from "./features/Home/HomePageProducts";
import { Settings } from "./features/Settings/Settings";
import { Orders } from "./features/Orders/Orders";
import { Menu } from "./features/Menu/Menu";
import { AdminOrders } from "./features/Orders/AdminOrders";
import { WatchList } from "./features/Watches/watchList";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<HomePageProducts />} />

            <Route path="login" element={<Auth />} />

            <Route path="register" element={<Auth />} />

            <Route path="products" element={<ProductList />} />

            <Route path="products/:productId" element={<ProductDetails />} />

            <Route
              path="products/:productId/edit"
              element={
                <AuthGuard>
                  <ProductEdit />
                </AuthGuard>
              }
            />

            <Route
              path="products/add"
              element={
                <AuthGuard>
                  <ProductAdd />
                </AuthGuard>
              }
            />
            <Route path="macs" element={<MacList />} />

            <Route path="watches" element={<WatchList/>}/>

            <Route
              path="settings"
              element={
                <AuthGuard>
                  <Settings />
                </AuthGuard>
              }
            />
            <Route
              path="cart"
              element={
                <AuthGuard>
                  <Cart />
                </AuthGuard>
              }
            />

            <Route
              path="menu"
              element={
                <AuthGuard>
                  <Menu />
                </AuthGuard>
              }
            />

            <Route
              path="orders"
              element={
                <AuthGuard>
                  <Orders />
                </AuthGuard>
              }
            />

            <Route
              path="adminorders"
              element={
                <AuthGuard>
                  <AdminOrders />
                </AuthGuard>
              }
            />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
