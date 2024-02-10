import styles from "./Latest.module.css";

export default function Latest() {
  return (
    <div>
      <div className="relative mt-6">
        <img
          src="../../images/IMG_9840.JPG"
          alt=""
          className={`${styles["latest-bg"]} opacity-[.3] w-full sm:h-[22rem] md:h-full md:opacity-0`}
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="#" className="bg-white shadow-lg py-4 px-8 tracking-widest ">
            SHOP LATEST
          </a>
        </button>
      </div>
    </div>
  );
}
