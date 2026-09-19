import React, { useEffect, useState } from "react";
import "./home.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";
import { useNavigate } from "react-router-dom";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

function Home() {
  const login = localStorage.getItem("currentUser");
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
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
        setProducts(productData);
      } catch (error) {
        console.log("Error Fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        {login != null? 
        (loading ? (
          categories.map((category) => (
            <SlideProductLoading key={category}/>
          ))
        ) : (
          categories.map((category) => (
            <SlideProduct
              key={category}
              data={products[category]}
              title={category.replace("-", " ")}
            />
          ))
        )): (navigate("/login")) }
      </div>
    </PageTransition>
  );
}

export default Home;
