import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ShopLatest from "./components/ShopLatest/ShopLatest";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import FullNav from "./components/Nav/FullNav";
import ItemView from "./components/ItemView/ItemView";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(null);
  const [links, setLinks] = useState(null);
  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.items);
        setLinks(data.links);
      });
  }, []);

  return (
    <Router>
      <div className="xl:w-[80%] xl:mx-auto">
        <Nav links={links} />
        <FullNav links={links} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />}></Route>
            <Route
              path="/ShopLatest"
              element={<ShopLatest items={items} />}></Route>
            <Route
              path="/ItemView/:id"
              element={<ItemView items={items} />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
