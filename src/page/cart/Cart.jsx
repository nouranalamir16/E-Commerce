import React, { useContext } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import "./cart.css";
import PageTransition from "../../components/PageTransition";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity , removeFromCart} = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <PageTransition>
      <div className="checkout">
        <div className="orderSummary">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="itemCart" key={index}>
                  <div className="imageName">
                    <div className="imgItem">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="priceItem">${item.price}</p>
                      <div className="quantityControl">
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <button className="deleteItem" onClick={() => removeFromCart(item.id)}>
                    <FaTrashCan />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bottomSummary">
            <div className="shotTable">
              <p>Total:</p>
              <span className="totalCheckout">${total.toFixed(2)}</span>
            </div>
            <div>
              <button  className="btnDiv" type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
