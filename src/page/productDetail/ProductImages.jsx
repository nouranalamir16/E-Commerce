import React from "react";

function ProductImages({product}) {
  return (
    <div className="imgsItem">
      <div className="bigImg">
        <img id="bigImg" src={product.images[0]} alt={product.title} />
      </div>
      <div className="smallImg">
        {product.images.map((img, index) => (
          <div className="imgDivSmall" key={index}>
            <img
              src={img}
              alt={product.title}
              onClick={() => (document.getElementById("bigImg").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
