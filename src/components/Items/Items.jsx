import React from "react";
import ItemLatest from "./Item/ItemLatest";
import ItemEarlier from "./Item/ItemEarlier";
import { useState, useEffect } from "react";

const Items = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("/data/items.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.items);
      });
  }, []);
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
