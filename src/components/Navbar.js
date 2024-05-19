import './Navbar.css'
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar(){
    return (
        <div class="container bar">
            <div className="title">
                <h1 style={{color: "red", fontStyle: "italic"}}>MensOutfit</h1>
            </div>
            <div className="link">
                <Link to="/" style={{fontWeight: "bold", fontSize: "1.4rem", textDecoration: "none", color: "#000", marginRight: "20px"}}>STORE</Link>
                <Link to="/cart" style={{fontWeight: "bold", fontSize: "1.4rem", color: "#000"}}><ShoppingCart size={32}/></Link>
            </div>
        </div>
    );
}

export default Navbar