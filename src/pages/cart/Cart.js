import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import PRODUCTS from "../../product";
import CartItem from "./CartItem"; 
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart(){
    const {cartItems, getTotalCartAmt} = useContext(ShopContext)
    const total = getTotalCartAmt()
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>Your Cart</h1>
            </div>
            <div class="container">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem
                            data={product}
                        />
                    }
                })}
            </div>
            {total > 0 ?
             <div>
                <p>Total: $ {total}</p>
                <button class="btn btn-dark mr-2" onClick={() => navigate("/")}>Continue Shopping</button>
                <button class="btn btn-dark">Checkout</button>
            </div>
            : <p className="alert">Your Cart is Empty</p>}
        </div>
    );
}
export default Cart;