import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext(); 
function CartProvider({children}) {

    const [favourites, setFavourites] = useState(() =>{
        const savedFav = localStorage.getItem('favouriteItems');
        return savedFav ? JSON.parse(savedFav) : [];
    });

    const addToFavourites =(item) =>{
        setFavourites((prev) => {
            if(prev.some((i) => i.id == item.id)) return prev;
            return [...prev, item];
        })
    }
    useEffect(() =>{
        localStorage.setItem("favouriteItems", JSON.stringify(favourites))
    }, [favourites])

    const removeFromFavourites = (id) =>{
        setFavourites((prev) => prev.filter((i) => i.id != id))
    }

    const [cartItems, setCartItems] = useState(() =>{
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const increaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => 
            item.id == id ? {...item, quantity: item.quantity + 1} : item
        ))
    }

    const decreaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => 
            item.id == id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
        ))
    }

    const removeFromCart = (id) =>{
        setCartItems(prevItems => prevItems.filter(item => item.id != id) )
    }

    const addToCart = (item) =>{
        setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}])
    }

    useEffect(() =>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

  return (
    <CartContext.Provider value={{cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart,addToFavourites, favourites,removeFromFavourites}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider