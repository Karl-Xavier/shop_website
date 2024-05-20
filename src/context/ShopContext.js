import { createContext, useState } from "react";
import PRODUCTS from "../product";

export const ShopContext = createContext(null)

function getDefaultCart(){
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

function ShopContextProvider(props){
    const [cartItems, setCartItems] = useState(getDefaultCart())

    function getTotalCartAmt(){
        let totalAmt = 0
        for(const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmt += cartItems[item] * itemInfo.price
            }
        }
        return totalAmt
    }

    function addToCart(itemId){
        setCartItems((prev ) => ({
            ...prev, [itemId] : prev[itemId] + 1
        }))
        alert("Item Added....Check Cart")
    }

    function removeFromCart(itemId){
        setCartItems((prev ) => ({
            ...prev, [itemId] : prev[itemId] - 1
        }))
    }

    function updateCartItem(newAmount, itemId){
        setCartItems((prev) => ({...prev, [itemId] : newAmount}))
    }
    
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem, getTotalCartAmt}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider