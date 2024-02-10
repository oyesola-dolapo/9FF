import { useState } from "react";
import styles from "./Nav.module.css";

export default function FullNav() {
  const links = [
    {
      title: "Home",
      class: "active",
    },
    {
      title: "Shop Latest",
    },
    { title: "All Products" },
    { title: "All Categories" },
    { title: "FAQS" },
  ];
  return (
    <nav className="hidden lg:inline-block w-full py-4 px-6 shadow-lg flex- flex-col">
      <div className="flex items-center justify-between">
        <i className="fa-solid fa-magnifying-glass"></i>
        <img
          src="../../images/logo.png"
          alt=""
          className={` ${styles.logo} w-[6rem]`}
        />
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <ul className="flex gap-6 w-max my-0 mx-auto mt-6">
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a href={link.link} key={link.title}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
