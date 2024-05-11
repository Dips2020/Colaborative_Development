/* eslint-disable no-unused-vars */
import React from "react";
import { ImCross } from "react-icons/im";

const AddToCart = () => {
  return (
    <div className="shopping-cart-container">
      <div className="inner-content">
        <div className="cart-content">
          <div className="left-section">
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="product-container">
              {/* Product 1 */}
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F0661ab15-eff0-443b-87b4-da254467c5e7?alt=media&token=fd906434-e0a1-4eb5-b19b-cbe166dab477"
                  alt="Shirt 1"
                />
                <div className="product-details">
                  <h3 className="product-title">Peanuts</h3>
                  <div>
                    <p className="product-info">Price: $35</p>
                    <p className="product-info">Dry Fruits</p>
                  </div>
                </div>
                <ImCross className="remove-icon" />
              </div>
              {/* Product 2 */}
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F0661ab15-eff0-443b-87b4-da254467c5e7?alt=media&token=fd906434-e0a1-4eb5-b19b-cbe166dab477"
                  alt="Shirt 1"
                />
                <div className="product-details">
                  <h3 className="product-title">Peanuts</h3>
                  <div>
                    <p className="product-info">Price: $35</p>
                    <p className="product-info">Dry Fruits</p>
                  </div>
                </div>
                <ImCross className="remove-icon" />
              </div>
              {/* Product 3 */}
              <div className="product-card">
                <img
                  className="product-image"
                  src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F0661ab15-eff0-443b-87b4-da254467c5e7?alt=media&token=fd906434-e0a1-4eb5-b19b-cbe166dab477"
                  alt="Shirt 1"
                />
                <div className="product-details">
                  <h3 className="product-title">Peanuts</h3>
                  <div>
                    <p className="product-info">Price: $35</p>
                    <p className="product-info">Dry Fruits</p>
                  </div>
                </div>
                <ImCross className="remove-icon" />
              </div>
            </div>
          </div>
          {/* Summary */}
          <div className="right-section">
            <h3 className="summary-title">Summary</h3>
            <hr className="divider" />
            <div className="summary-info">
              <span>ITEMS 3</span>
              <span>&euro; 132.00</span>
            </div>
            <div className="summary-info">
              <span>TOTAL PRICE</span>
              <span>&euro; 137.00</span>
            </div>
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
