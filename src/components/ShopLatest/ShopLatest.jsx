import { useState, useEffect } from "react";
import LatestItems from "./LatestItems/LatestItems";

export default function ShopLatest() {
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
      <h1 className="p-6 text-2xl tracking-wider  font-medium">Latest Drop</h1>
      {items && <LatestItems items={items} />}
    </div>
  );
}
