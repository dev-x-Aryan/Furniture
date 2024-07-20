import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Dialog from "../Home/Dialog.jsx";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { name } = useParams();
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const content = (
    <>
      <div className="flex flex-col w-[70%] m-auto border border-black p-4">
        <div className="flex gap-3 w-full items-center">
          <div>
            <div>
              <img
                src="https://www.istanbulfurniture.com/cdn/shop/files/Massimo-Shawl-Turkish-Luxury-Furniture-Set-5_b856b289-db9c-465b-8787-b9a7e8bddffb_900x.jpg?v=1719919826"
                alt="#"
                className="h-[500px] w-[500px]"
              />
            </div>
            <div className="flex gap-3 p-3 justify-evenly">
              <div className="h-[100px] w-[100px] bg-emerald-500"></div>
              <div className="h-[100px] w-[100px] bg-emerald-500"></div>
              <div className="h-[100px] w-[100px] bg-emerald-500"></div>
              <div className="h-[100px] w-[100px] bg-emerald-500"></div>
            </div>
          </div>
          <div className="border border-black p-3 w-full h-[600px]">
            <div className=" mb-3">
              <h1 className="text-2xl">Title of product</h1>
            </div>
            <div>
              <p className="text-gray-500 underline">Category of product</p>
            </div>
            <div>
              <p className="font-bold mt-5 mb-5"> Colors</p>
              <div className="flex gap-2 ">
                <div className="rounded-full bg-emerald-600 h-[25px] w-[25px] border hover:border-black curs "></div>
                <div className="rounded-full bg-emerald-600 h-[25px] w-[25px] border hover:border-black curs "></div>
                <div className="rounded-full bg-emerald-600 h-[25px] w-[25px] border hover:border-black curs "></div>
              </div>
            </div>
            <div>
              <p className="font-bold mt-5 mb-5">Set</p>
              <div className="flex flex-wrap gap-3">
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
                <button className="border  border-black p-2 rounded-sm hover:bg-black hover:text-white text-black">
                  Different types of sets
                </button>
              </div>

              <div>
                <p className="font-bold mt-5 mb-5">Price</p>
                <p className="font-bold mt-5 mb-5">$1,999</p>
              </div>
              <div>
                <div>
                  <p className="text-gray-500">Carbon Neutral</p>
                </div>
                <div>
                  <p className="text-gray-500">Secure Payments</p>
                </div>
              </div>

              <div className="w-full mt-5 text-center ">
                <button
                  className="border w-full border-black p-2 rounded-sm hover:bg-black hover:text-white text-black"
                  onClick={handleCheckout}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Dialog show={showDialog} onClose={closeDialog} title={dialogDetails}>
          {dialogContent}
        </Dialog>
      </div>
      <div>Product details</div>
    </>
  );
  return content;
};

export default ProductDetails;
