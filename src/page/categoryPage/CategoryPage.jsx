import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product';
import "./categoryPage.css"
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransition';

function CategoryPage() {

    const {category} = useParams();
    
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) =>{
            setCategoryProducts(data)
        })
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    }, [category])
  return (
    <PageTransition key={category}>
        <div className="categoryProducts">
            {loading? <SlideProductLoading key={category}/>: 
                (<div className="container">
                    <div className="topSlide">
                        <h2>{category}: {categoryProducts.limit}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="products">
                        {categoryProducts.products.map((item, index) =>(
                            <Product item={item} key={index}/>
                        ))}
                    </div>
                </div>)
            }
        </div>
    </PageTransition>
  )
}

export default CategoryPage