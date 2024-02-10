import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function FullNav({ links }) {
  return (
    <nav className="hidden lg:inline-block w-full py-4 px-6 shadow-lg flex- flex-col xl:shadow-none">
      <div className="flex items-center justify-between">
        <i className="fa-solid fa-magnifying-glass"></i>
        <img
          src="../../images/logo.png"
          alt=""
          className={` ${styles.logo} w-[6rem]`}
        />
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      {links && (
        <ul className="flex gap-6 w-max my-0 mx-auto mt-6">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Link to={link.link} key={link.title}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
