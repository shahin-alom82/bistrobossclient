import { useState } from "react";
import Cover from "../Cover";
import img from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../contants/Hoks";
import Container from "../Container";
import { Helmet } from "react-helmet-async";

const OrderShop = () => {
  const [menu] = useMenu();
  const [selectedCategory, setSelectedCategory] = useState("dessert");

  const nav = [
    { title: "Dessert", category: "dessert" },
    { title: "Soup", category: "soup" },
    { title: "Salad", category: "salad" },
    { title: "Pizza", category: "pizza" },
    { title: "Offered", category: "offered" },
    { title: "Popular", category: "popular" },
  ];

  const filteredMenu = menu?.filter((item) => item?.category === selectedCategory) || [];


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Container>
        {/* Cover Section */}
        <Cover image={img} topMenu={"Our Shop"} middleMenu={"Would you like to try a dish?"} />

        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 mt-10 justify-center">
          {nav.map((item, index) => (
            <button
              key={index}
              className={`uppercase tracking-wide font-medium py-1 px-4 transition duration-300 
                  ${selectedCategory === item.category ? "bg-yellow-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"}`}
              onClick={() => setSelectedCategory(item.category)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <div key={item._id} className="border-2 border-gray-300 rounded-lg relative">
                <img src={item.image} alt={item.name} className="w-full h-48 rounded-t-lg" />
                <div className="py-2 px-2">
                  <h3 className="text-xl mt-2 font-medium tracking-wide">{item.name}</h3>
                  <p className="text-gray-500 mt-2 h-16">{item.recipe.slice(0, 60)}</p>
                  <button className="w-full bg-yellow-600 py-1.5 rounded-full text-white mt-1 mb-1">Add To Cart</button>
                  <p className="text-white absolute top-2 right-2 bg-black opacity-70 px-1 rounded text-sm">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg col-span-3">No items available in this category.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default OrderShop;
