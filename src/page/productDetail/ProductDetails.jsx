import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { FaShare, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import ProductDetailsLoading from "./productDetailsLoading";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  if (!product) return <p>Product Not Found</p>;

  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <ProductDetailsLoading />
        ) : (
          <div className="itemDetails">
            <div className="container">
              <ProductImages product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingRelatedProducts ? (
          <SlideProductLoading />
        ) : (
          <SlideProduct
            key={product.category}
            title={product.category.replace("-", " ")}
            data={relatedProducts}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
