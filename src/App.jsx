import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ShopLatest from "./components/ShopLatest/ShopLatest";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import FullNav from "./components/Nav/FullNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Nav />
        <FullNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ShopLatest" element={<ShopLatest />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
