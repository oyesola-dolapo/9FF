export default function ItemEarlier() {
  const items = [
    {
      id: 1,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-7.JPG",
    },
    {
      id: 2,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-10.JPG",
    },
    {
      id: 3,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-11.JPG",
    },
    {
      id: 4,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-10.JPG",
    },
    {
      id: 5,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-1.JPG",
    },
    {
      id: 6,
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-2.JPG",
    },
  ];
  return (
    <>
      <div className=" py-8 flex flex-col gap-4 border-b-2 border-solid">
        <h1 className="uppercase text-center text-2xl tracking-wider">
          Earlier Collection
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 mb-4">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <a href="" className="flex flex-col gap-2">
                  <div className="image-con bg-[#eaeaea] w-[10rem] h-[14rem] sm:w-[20rem] sm:h-[23rem] flex items-center justify-center">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="name text-lg tracking-wider">{item.name}</p>
                  <p className="price text-lg tracking-wider">{item.price}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <button>
          <a
            href="#"
            className="text-white bg-black py-2 px-6 shadow-xl mt-4 tracking-wider">
            View All
          </a>
        </button>
      </div>
    </>
  );
}
