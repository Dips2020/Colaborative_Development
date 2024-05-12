// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const AddToCart = () => {
  return (
    <div className="bg-gray-100  w-full h-full mt-[100px] flex justify-center items-center font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md flex">
          {/* Cart */}
          <div className="w-[75%] p-8">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {/* Cart Items */}
            <div className="border-b border-gray-200 mb-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <img
                    className="w-[300px] h-[200px] rounded-lg mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F7a44a66b-2ec6-4ca6-b613-244e740832c0?alt=media&token=84b60871-37b6-45d0-8a1b-27c6d95901aa"
                    alt="Shirt"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Buffalo Meat</h3>

                    <p className="text-sm text-gray-600">Fresh Meats</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="border px-3 py-1 mr-2">
                    <FaMinus />
                  </button>
                  <span className="border px-3 py-1">1</span>
                  <button className="border px-3 py-1 ml-2">
                    <AiOutlinePlus />
                  </button>
                  <span className="text-sm ml-4">$4.00</span>
                  <button className="ml-2">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="border-b border-gray-200 mb-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <img
                    className="w-[300px] h-[200px] rounded-lg mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F7a44a66b-2ec6-4ca6-b613-244e740832c0?alt=media&token=84b60871-37b6-45d0-8a1b-27c6d95901aa"
                    alt="Shirt"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Buffalo Meat</h3>

                    <p className="text-sm text-gray-600">Fresh Meats</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="border px-3 py-1 mr-2">
                    <FaMinus />
                  </button>
                  <span className="border px-3 py-1">1</span>
                  <button className="border px-3 py-1 ml-2">
                    <AiOutlinePlus />
                  </button>
                  <span className="text-sm ml-4">$4.00</span>
                  <button className="ml-2">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
            {/* Cart Items */}
            <div className="border-b border-gray-200 mb-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                  <img
                    className="w-[300px] h-[200px] rounded-lg mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/test-2-69499.appspot.com/o/ProductsImg%2F7a44a66b-2ec6-4ca6-b613-244e740832c0?alt=media&token=84b60871-37b6-45d0-8a1b-27c6d95901aa"
                    alt="Shirt"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Buffalo Meat</h3>

                    <p className="text-sm text-gray-600">Fresh Meats</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="border px-3 py-1 mr-2">
                    <FaMinus />
                  </button>
                  <span className="border px-3 py-1">1</span>
                  <button className="border px-3 py-1 ml-2">
                    <AiOutlinePlus />
                  </button>
                  <span className="text-sm ml-4">$4.00</span>
                  <button className="ml-2">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
            {/* Add more items here */}
          </div>
          {/* Summary */}
          <div className="w-[25%] bg-gray-50 p-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="mb-4">
              <p className="text-sm">ITEMS 3</p>
              <p className="text-sm text-right">$4.00</p>
            </div>

            <div className="border-t border-gray-200 mb-4">
              <p className="text-sm">TOTAL PRICE</p>
              <p className="text-sm text-right">$4.00</p>
            </div>
            <button className="btn bg-[#069E2D] mt-2 hover:bg-[#04773B]  text-white w-full py-2">
              CHECKOUT
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-gray-500 hover:underline">
            &larr; Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
