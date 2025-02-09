
const MenuCarts = ({ item }) => {
      return (
            <div className="flex flex-col lg:flex-row gap-6 mt-8">
                  <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-28" src={item?.image} alt="" />
                  <div>
                        <h1 className="uppercase text-xl tracking-widetexgra8
                        ">{item?.name} -----------------------</h1>
                        <p className="tracking-wide text-gray-600 mt-2">{item?.recipe}</p>
                  </div>
                  <p className="text-yellow-600">${item?.price}</p>
            </div>
      );
};

export default MenuCarts;