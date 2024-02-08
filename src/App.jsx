import { useState } from "react";
import Nav from "./components/Nav/Nav";
import FullNav from "./components/Nav/FullNav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <FullNav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
