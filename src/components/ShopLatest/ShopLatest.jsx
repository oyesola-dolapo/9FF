import { useState, useEffect } from "react";
import LatestItems from "./LatestItems/LatestItems";

export default function ShopLatest({ items }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="p-6 text-2xl tracking-wider  font-medium">Latest Drop</h1>
      {items && <LatestItems items={items} />}
    </div>
  );
}
