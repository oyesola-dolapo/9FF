import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemView({ items }) {
  const { id } = useParams();
  if (!items || !Array.isArray(items)) {
    return <div>Loading...</div>;
  }
  const sizes = [
    { size: "XS" },
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
  ];

  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div className="flex flex-col items-center pt-8 sm:flex-row sm:items-start sm:gap-2 px-4">
      <div className="image-container bg-[#eaeaea] w-[90%] h-[23rem] flex justify-center items-center">
        <img src={item.image} alt="" />
      </div>
      <div className="product-info px-4 w-full pt-4 sm:pt-0">
        <div>
          <p>𝟗ƑℲ</p>
          <h1 className="text-2xl tracking-widest">{item.name}</h1>
          <p className="text-xl pt-4 tracking-wider">{item.price}</p>
          <p className="text-xs opacity-[.7]">Tax included</p>
        </div>
        <div className="mt-4">
          <p className="mb-2">Storlek</p>
          <ul className="flex">
            {sizes.map((size) => {
              return (
                <li
                  className=" border-2 border-black rounded-full w-14 h-8 mr-2 flex justify-center items-center"
                  key={size.size}>
                  {size.size}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-6">
          <button className="cart-btn w-full h-14 mb-2 border-2 border-black text-lg tracking-wider">
            Add to cart
          </button>
          <a href="#" className=" text-center underline text-sm">
            <p>Payment Options</p>
          </a>
          <p className="opacity-[.7] mt-4">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
