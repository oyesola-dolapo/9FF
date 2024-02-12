import React from "react";
import ItemLatest from "./Item/ItemLatest";
import ItemEarlier from "./Item/ItemEarlier";
import { useState, useEffect } from "react";

const Items = ({ items }) => {
  return (
    <div>
      {items ? (
        <div>
          <ItemLatest items={items} />
          <ItemEarlier items={items} />
        </div>
      ) : (
        <div className="text-center text-2xl font-medium opacity-[.6] py-12">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Items;
