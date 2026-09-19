import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import BtmHeader from "./components/header/BtmHeader"
import TopHeader from "./components/header/TopHeader"
import Home from "./page/Home/Home"
import ProductDetails from "./page/productDetail/ProductDetails"
import Cart from "./page/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./components/ScrollToTop"
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/categoryPage/CategoryPage"
import Searchresults from "./page/Searchresults"
import Favourites from "./page/favourites/Favourites"
import LoginPage from "./page/LoginPage/LoginPage"
import RegisterPage from "./page/RegisterPage/RegisterPage"
import About from "./page/About/About"
import Footer from "./components/Footer/Footer"
import Accessories from "./page/Accessories/Accessories"
import Blog from "./page/Blog/Blog"
import Contact from "./page/Contact/Contact"


function App() {

  const location = useLocation();
const hideHeaderPaths = ["/login", "/register"];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && (
        <header>
          <TopHeader />
          <BtmHeader />
        </header>
      )}

    <Toaster position="bottom-right" toastOptions={{
      style: {
        background :"#e9e9e9",
        borderRadius: '10px',
        padding: '12px'

    }}} />

      <ScrollToTop/>
      

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<Searchresults />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App
