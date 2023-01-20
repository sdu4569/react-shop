import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Detail/ProductDetail";
import AccessoryPage from "./Page/AccessoryPage";
import CartPage from "./Page/CartPage";
import DigitalPage from "./Page/DigitalPage";
import ErrorPage from "./Page/ErrorPage";
import FashionPage from "./Page/FashionPage";
import MainPage from "./Page/MainPage";

const PageNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/fashion" element={<FashionPage />} />
      <Route path="/accessory" element={<AccessoryPage />} />
      <Route path="/digital" element={<DigitalPage />} />
      <Route path="/grocery" element={<ErrorPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default PageNavigator;
