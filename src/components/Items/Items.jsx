import React from "react";
import ItemLatest from "./Item/ItemLatest";
import ItemEarlier from "./Item/ItemEarlier";
import { useState, useEffect } from "react";

const Items = ({ items }) => {

  return (
    <div>
      {items && (
        <div>
          <ItemLatest items={items} />
          <ItemEarlier items={items} />
        </div>
      )}
    </div>
  );
};

export default Items;
