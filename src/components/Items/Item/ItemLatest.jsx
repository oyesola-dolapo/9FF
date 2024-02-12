import { Link } from "react-router-dom";

export default function ItemLatest({ items }) {
  
  return (
    <div className="h-max py-8 flex flex-col gap-4">
      <h1 className="uppercase text-center text-2xl tracking-wider">
        Latest Collection
      </h1>
      <ul className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-4">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/ItemView/${item.id}`} className="flex flex-col gap-2">
                <div className="image-con bg-[#eaeaea] w-[11rem] h-[14rem] sm:w-[20rem] sm:h-[23rem] flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <p className="name text-lg tracking-wider">{item.name}</p>
                <p className="price text-lg tracking-wider">{item.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="block">
        <Link
          to="/ShopLatest"
          className="text-white bg-black py-2 px-6 shadow-xl mt-4 tracking-wider">
          View All
        </Link>
      </button>
    </div>
  );
}
