import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { ProductListingPage } from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Bears from "./pages/Bears";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/store" element={<ProductListingPage />}></Route>
      <Route path="/store/dp/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/bears" element={<Bears />}></Route>
    </Routes>
  </BrowserRouter>
);
