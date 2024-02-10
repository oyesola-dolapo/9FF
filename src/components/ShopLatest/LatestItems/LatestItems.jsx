export default function LatestItems({ items }) {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-4">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <a href="" className="flex flex-col gap-2">
                <div className="image-con bg-[#eaeaea] w-[11rem] h-[14rem] sm:w-[20rem] sm:h-[23rem] flex items-center justify-center">
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
