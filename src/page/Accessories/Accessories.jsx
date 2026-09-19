import React, { useEffect, useState } from "react";
import Product from "../../components/slideProducts/Product";
import "./Accessories.css"

const categories = [
  "mobile-accessories",
  "sports-accessories",
  "kitchen-accessories",
];
function Accessories() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );

        const productData = Object.assign({}, ...results);
        console.log(productData);
        setProducts(productData);
      } catch (error) {
        console.log("Error Fetching", error);
      } 
    };
    fetchProducts();
  }, []);
  
  return (
    <div className="accessories">
      <div className="container">

          <h2 >Accessories</h2>
        <div className="products">
            {categories.map((category) =>
            products[category]?.map((item, index) => (
                <Product key={index} item={item} />
            )),
          )}
        </div>

      </div>
    </div>
  );
}

export default Accessories;
