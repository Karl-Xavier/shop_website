import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/ShopContext";

function App() {
  const getYear = new Date().getFullYear()
  return (
    <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <footer style={{padding: "7%", textAlign: "center", fontWeight: "bold"}}>    
        <p>&copy; Copyright Emeka Bruno {getYear} </p>
      </footer>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
