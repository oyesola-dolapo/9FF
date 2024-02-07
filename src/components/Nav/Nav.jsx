import styles from "./Nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [menuBtn, setMenuBtn] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const links = [
    {
      title: "Home",
      class: "active",
    },
    { title: "Shop Latest" },
    { title: "All Products" },
    { title: "All Categories" },
    { title: "FAQS" },
  ];
  const openMenu = () => {
    const sideMenu = document.getElementById("side-nav");
    setMenuBtn(!menuBtn);
    setSideBar(!sideBar);
    if (sideBar === false) {
      sideMenu.classList.add("hidden");
    } else {
      sideMenu.classList.remove("hidden");
    }
  };
  return (
    <div className="relative">
      <nav className="shadow-lg flex items-center justify-between p-2 px-6">
        <div
          onClick={() => {
            openMenu();
          }}>
          {menuBtn ? (
            <i class="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i class="fa-solid fa-xmark text-2xl"></i>
          )}
        </div>
        <img src="../../images/logo.png" alt="" className="w-[6rem]" />
        <div className="flex gap-4 items-center">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
          <i class="fa-solid fa-cart-shopping text-xl"></i>
        </div>
      </nav>
      <div
        id="side-nav"
        className={`${styles["side-nav"]} absolute top-0 left-0 w-[80%] h-screen bg-white pt-32`}>
        <ul>
          {links.map((link) => {
            return (
              <li className="block" key={link.title}>
                <a
                  href=""
                  className={`${styles[link.class]} inline-block w-full`}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
