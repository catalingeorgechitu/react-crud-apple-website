import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";
import { Auth } from "./features/Auth/Auth";
import { Parent } from "./features/Communication/Parent";
import { AuthContextProvider } from "./features/Auth/Auth.context";
import React from "react";

import "./App.css";
// import { Todos } from "./features/Todos/Todos";
import { AuthGuard } from "./components/AuthGuard";
// import { MovieList } from "./features/Movies/MovieList";
// import { MovieDetails } from "./features/Movies/MovieDetails";
// import { MovieEdit } from "./features/Movies/MovieEdit";
// import { MovieAdd } from "./features/Movies/MovieAdd";
import { ProductList } from "./features/Products/ProductList";
import { ProductDetails } from "./features/Products/ProductDetails";
import { ProductAdd } from "./features/Products/ProductAdd";
import { ProductEdit } from "./features/Products/ProductEdit";
import { Cart } from "./features/Cart/Cart";
import { MacList } from "./features/Mac/macList";
// import { MacDetails } from "./features/Mac/macDetails";
// import { MacEdit } from "./features/Mac/macEdit";
// import { MacAdd } from "./features/Mac/macAdd";
import { HomePageProducts } from "./features/Home/HomePageProducts";
import { Settings } from "./features/Settings/Settings";
import { Orders } from "./features/Orders/Orders";
import { Menu } from "./features/Menu/Menu";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<HomePageProducts />} />
            <Route path="login" element={<Auth />} />
            <Route path="register" element={<Auth />} />
            {/* <Route path="movies" element={<MovieList />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route
              path="movies/:movieId/edit"
              element={
                <AuthGuard>
                  <MovieEdit />
                </AuthGuard>
              }
            />
            <Route
              path="movies/add"
              element={
                <AuthGuard>
                  <MovieAdd />
                </AuthGuard>
              }
            /> */}
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
            {/* <Route path="macs/:macId" element={<MacDetails />} /> */}
            {/* <Route
              path="macs/:macId/edit"
              element={
                <AuthGuard>
                  <MacEdit />
                </AuthGuard>
              }
            /> */}
            {/* <Route
              path="macs/add"
              element={
                <AuthGuard>
                  <MacAdd />
                </AuthGuard>
              }
            /> */}
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

            {/* ----- To be deleted -----  */}
            <Route
              path="counter"
              element={<Counter delta={1} initialValue={0} />}
            />
            <Route path="weather" element={<Weather />} />
            {/* <Route
              path="todos"
              element={
                <AuthGuard>
                  <Todos />
                </AuthGuard>
              }
            /> */}
            {/* <Route
              path="todos/:todoId"
              element={
                <AuthGuard>
                  <Todos />
                </AuthGuard>
              }
            /> */}
            <Route path="comm" element={<Parent />} />
            {/* ----- To be deleted ----- */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
