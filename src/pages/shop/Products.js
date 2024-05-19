import React, { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../../context/ShopContext";
import './Products.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import { Col } from "react-bootstrap"; */
function Products(props){
    const {id, productName, price, productImg} = props.data;

    const {addToCart} = useContext(ShopContext)
    return (
        <div class="col-lg-4 col-md-6 col-6 column">
        <div class="displayCards card" style={{width: "100%"}}>
            <img class="rounded card-img-top" src={productImg} alt="" height={350}/>
          <div class="card-body">
            <h2>{productName}</h2>
            <p className="priceTag">$ {price}.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{backgroundColor: "grey", fontWeight: "bold", padding: "4px", textDecoration: "line-through"}}>99%</span></p>
            <button class="btn btn-lg btn-block btn-outline-dark cartbtn" type="button" onClick={() => {addToCart(id)}}>Add to Cart <ShoppingCart/></button>
          </div>
        </div>
      </div>
    );
}
export default Products;