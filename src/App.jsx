import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShopNow from "./components/ShopNow";
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import CheckOut from "./components/CheckOut";
import Item from "./components/Item";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <div className="bg-black">
        <NavBar setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/" element={<Item />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
        {isLoggedIn ? <Footer /> : <div className="blank"></div>}
      </div>
    </BrowserRouter>
  );
}

export default App;
