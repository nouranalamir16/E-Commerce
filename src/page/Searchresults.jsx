import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SlideProductLoading from "../components/slideProducts/SlideProductLoading";
import Product from "../components/slideProducts/Product";

function Searchresults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );

        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.log("search error ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);
  return (
    <PageTransition key={query}>
      <div className="categoryProducts">
        {loading ? (
          <SlideProductLoading key={query} />
        ) : results.length > 0? (
          <div className="container">
            <div className="topSlide">
              <h2>
                Results for: {query}
              </h2>
            </div>
            <div className="products">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ): <p className="container">No Results Found</p>}
      </div>
    </PageTransition>
  );
}

export default Searchresults;
