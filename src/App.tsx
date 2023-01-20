import Nav from "./Header/Nav";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import PageNavigator from "./PageNavigator";
import Footer from "./Footer/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export default function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <section className="drawer-content">
          <Nav />
          <PageNavigator />
          <Footer />
        </section>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}
