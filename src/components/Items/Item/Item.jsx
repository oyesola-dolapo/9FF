export default function Item() {
  const items = [
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-1.JPG",
    },
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-2.JPG",
    },
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-3.JPG",
    },
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-4.JPG",
    },
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-5.JPG",
    },
    {
      name: "FIGURE FUND$",
      price: "100 CAD",
      image: "../../images/Items/Item-6.JPG",
    },
  ];
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-4">
        {items.map((item) => {
          return (
            <li>
              <a href="" className="flex flex-col gap-2">
                <div className="image-con bg-[#eaeaea] w-[10rem] h-[12rem] sm:w-[20rem] md:h-[23rem] flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <p className="name text-lg tracking-wider">{item.name}</p>
                <p className="price text-lg tracking-wider">{item.price}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
