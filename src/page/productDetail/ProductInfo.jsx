import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/contexts/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ProductInfo({product}) {

    const navigate = useNavigate();
    const {cartItems, addToCart, addToFavourites, favourites, removeFromFavourites} = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id == product.id);

    const handleAddToCart =()=>{
        addToCart(product);

        toast.success(
            <div className="toastWrapper">
                <img src={product.images[0]} className='toastImg' alt="" />

                <div className="toastContent">
                    <strong>{product.title}</strong>
                    add to Cart 
                    <div>
                        <button className="btn" onClick={() =>navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>
            ,{duration: 3500}
        )
    }

    const isInFav = favourites.some(i => i.id == product.id);

    const handleAddToFavourites = () =>{
        if(isInFav){
            removeFromFavourites(product.id);
            toast.error(`${product.title} removed from favourites`)
        }else{
            addToFavourites(product);
            toast.success(`${product.title} added to favourites`)
        }
    }

  return (
    <div className="detailsItem">
            <h1 className="name">{product.name}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <p className="price">$ {product.price}</p>
            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="desc">{product.description}</p>
            <h5 className="stock">
              <span>
                Hurry Up! Only {product.stock} products left in stock.
              </span>
            </h5>

            <button className={`btn ${isInCart ? "inCart" : ""}`} onClick={ handleAddToCart}>
              {isInCart ? "Item in Cart" : "Add to Cart"}    <TiShoppingCart />
            </button>
            <div className="icons">
              <span className={`${isInFav ? "inFav" : ""}`}  onClick={ handleAddToFavourites}> 
                <FaRegHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
  )
}

export default ProductInfo