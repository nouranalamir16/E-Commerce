import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../img/logo.png"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CartContext } from '../contexts/CartContext';
import SearchBox from './SearchBox';

function TopHeader() {

    const {cartItems, favourites} = useContext(CartContext);
    console.log("mvnv", cartItems.length)
  return (
    <div className='topHeader'>
        <div className="container">
            <Link className='logo' to="/"><img src={Logo} alt="" /></Link>
            
            <SearchBox/>

            <div className="headerIcons">
                <div className="icon">
                    <Link to={"/favourites"}>
                        <FaRegHeart/>
                        <span className="count">{favourites.length}</span>
                    </Link>
                </div>
                <div className="icon">
                    <Link to="/cart">
                        <TiShoppingCart />
                        <span className="count">{cartItems.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader