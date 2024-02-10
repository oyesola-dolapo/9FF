import Latest from "../Latest/Latest.jsx";
import Items from "../Items/Items.jsx";
import { useEffect, useState } from "react";

export default function Home({ items }) {
  return (
    <main>
      <Latest />
      <Items items={items} />
    </main>
  );
}
