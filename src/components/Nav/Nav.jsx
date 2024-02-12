import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav({ links }) {
  const [menuBtn, setMenuBtn] = useState(true);
  const [sideBar, setSideBar] = useState("");
  const openMenu = () => {
    setMenuBtn(!menuBtn);
    setSideBar(!sideBar);
  };
  const closeMenu = () => {
    setSideBar(!sideBar);
    setMenuBtn(!menuBtn);
  };
  return (
    <div className="relative z-10 lg:hidden">
      <nav className="shadow-lg flex items-center justify-between p-2 px-6 ">
        <div
          onClick={() => {
            openMenu();
          }}>
          {menuBtn ? (
            <i className="fa-solid fa-bars text-2xl"></i>
          ) : (
            <i className="fa-solid fa-xmark text-2xl"></i>
          )}
        </div>
        <img
          src="../../images/logo.png"
          alt=""
          className={` ${styles.logo} w-[6rem]`}
        />
        <div className="flex gap-4 items-center">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
          <i className="fa-solid fa-cart-shopping text-xl"></i>
        </div>
      </nav>
      {sideBar && (
        <nav
          className={`${styles["side-nav"]} fixed flex flex-col top-0 left-0 w-[80%] h-full bg-white pt-32 pb-12`}>
          {links && (
            <ul>
              {links.map((link) => {
                return (
                  <li className="block" key={link.title}>
                    <Link
                      to={link.link}
                      onClick={() => {
                        closeMenu();
                      }}
                      className={`${styles[link.class]} ${
                        styles["side-nav-links"]
                      } inline-block w-full`}>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="socials ml-6 mt-auto">
            <ul className="text-2xl flex gap-4">
              <li>
                <a href="https://www.instagram.com/9ff.clothing?igsh=aTJrY2pnOTBldDdr">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
