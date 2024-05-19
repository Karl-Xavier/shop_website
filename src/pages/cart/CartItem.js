import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './cart.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function CartItem(props){

    const {id, productName, price, productImg} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItem} = useContext(ShopContext)

    function handleAddToCart(){
        addToCart(id)
    }
    function handleRemoveFromCart(){
        removeFromCart(id)
    }
    function update(e){
        updateCartItem(Number(e.target.value),id)
    }

    return (
        <div class="row rounded my-3 p-5 text-center">
            <div class="col-lg-5">
                <img class="rounded" src={productImg} alt="" height={200}/>
            </div>
            <div class="col-lg-7">
                <h2>{productName}</h2>
                <p>$ {price}.00</p>
                <div className='handler'>
                    <button className='minus'onClick={handleRemoveFromCart}>-</button>
                    <input 
                        value={cartItems[id]} onChange={update}                      
                    />
                    <button className='add' onClick={handleAddToCart}>+</button>
                </div>
            </div>
        </div>
    );
}
export default CartItem;