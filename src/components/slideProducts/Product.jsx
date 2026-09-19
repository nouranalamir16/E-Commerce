import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaStar,FaStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus,FaRegHeart} from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { CartContext } from '../contexts/CartContext';
import toast from 'react-hot-toast';


function Product({item}) {


    const navigate = useNavigate();

    const {cartItems, addToCart, addToFavourites, favourites, removeFromFavourites} = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id == item.id);
    
    const handleAddToCart =()=>{
        addToCart(item);

        toast.success(
            <div className="toastWrapper">
                <img src={item.images[0]} className='toastImg' alt="" />

                <div className="toastContent">
                    <strong>{item.title}</strong>
                    add to Cart 
                    <div>
                        <button className="btn" onClick={() =>navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            ,{duration: 3500}
        )
    }

    const isInFav = favourites.some(i => i.id == item.id);

    const handleAddToFavourites = () =>{
        if(isInFav){
            removeFromFavourites(item.id);
            toast.error(`${item.title} removed from favourites`)
        }else{
            addToFavourites(item);
            toast.success(`${item.title} added to favourites`)
        }
    }
    
  return (
    <div className={`product ${isInCart ? "inCart" : ""}`}>
        <Link to = {`/products/${item.id}`}>

            <span className="statusCart"><FaCheck/> in Cart</span>

            <div className="imgProduct">
            <img src={item.images[0]} alt="" />
        </div>
            <p className="nameProduct">{item.title}</p>
            <div className="stars">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStarHalfStroke/>
            </div>
            <p className="price"><span>$ {item.price}</span></p>
        </Link>
            <div className="icons">
                <span className='btnAddToCart' onClick={ handleAddToCart}><FaCartPlus/></span>
                <span className={`${isInFav ? "inFav" : ""}`}  onClick={ handleAddToFavourites}><FaRegHeart/></span>
                <span><FaShare/></span>
            </div>
    </div>
  )
}

export default Product