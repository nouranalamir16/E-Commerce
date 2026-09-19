import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import './header.css'

const navLinks = [
    {title: "Home", link: "/home"},
    {title: "About", link: "/about"},
    {title: "Accessories", link: "/accessories"},
    {title: "Blog", link: "/blog"},
    {title: "Contact", link: "/contact"},
]

function BtmHeader() {

    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const [isCatogryOpen, setIsCatogryOpen] = useState(false);

    useEffect(() =>{
        setIsCatogryOpen(false);
    }, [location])

    useEffect(() =>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((data) => setCategories(data));
    }, [])
    console.log(categories);
  return (
    <div className='btmHeader'>
        <div className="container">
            <nav className="nav">
                <div className="categoryNav">
                    <div className="categoryBtn" onClick={() => setIsCatogryOpen(!isCatogryOpen)}>
                        <IoMdMenu />
                        <p>Browse Category</p>
                        <MdOutlineArrowDropDown />
                    </div>
                    <div className={`categoryNavList ${isCatogryOpen? "active" : ""}`}>
                        {categories.map((category) => (
                            <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                        ))}
                    </div>
                </div>

                <ul className="navLinks">
                    {navLinks.map(item => (
                        <li key={item.link} className={location.pathname === item.link ? "active" : ""}><Link to = {item.link}>{item.title}</Link></li>
                    ))}
                </ul>
            </nav>

            <div className="signRegIcon">
                <Link to="/login"><PiSignInBold /></Link>
                <Link to="/register"><FaUserPlus /></Link>
            </div>
        </div>
    </div>
  )
}

export default BtmHeader