import { Helmet } from "react-helmet-async";
import useMenu from "../../contants/Hoks";
import Container from "../Container";
import Cover from "../Cover";
import menuCover from "../../assets/menu/banner3.jpg"
// import desserts from "../../assets/menu/dessert-bg.jpeg"
import MenuCategory from "./MenuCategory";

const OurMenu = () => {

      const [menu] = useMenu();
      const dessert = menu?.filter((item) => item?.category === 'dessert') || [];
      const soup = menu?.filter((item) => item?.category === 'soup') || [];
      const salad = menu?.filter((item) => item?.category === 'salad') || [];
      const pizza = menu?.filter((item) => item?.category === 'pizza') || [];
      const offered = menu?.filter((item) => item?.category === 'offered') || [];
      const popular = menu?.filter((item) => item?.category === 'popular') || [];
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Our Menu</title>
                  </Helmet>
                  <Container>
                        <Cover
                              image={menuCover}
                              topMenu={"Our Menu"}
                              middleMenu={"Would you like to try a dish?"}
                        />
                        {/* ---------- Offerd ---------- */}
                        <div className="mt-20">
                              <div className="relative flex items-center my-4">
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                                    <span className="px-4 text-gray-500 uppercase text-3xl tracking-wide">Offerd</span>
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                              </div>
                              <MenuCategory item={offered} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 lg:ml-[40%] text-sm mt-10">Order Your Favorite Food</button>
                        </div>
                        {/* -------- Dessert -------- */}
                        <div className="mt-20">
                              <div className="relative flex items-center my-4">
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                                    <span className="px-4 text-gray-500 uppercase text-3xl tracking-wide">Dessert</span>
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                              </div>
                              <MenuCategory item={dessert} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Salad ----------- */}
                        <div className="mt-20">
                              <div className="relative flex items-center my-4">
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                                    <span className="px-4 text-gray-500 uppercase text-3xl tracking-wide">Salad</span>
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                              </div>
                              <MenuCategory item={salad} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Soup ----------- */}
                        <div className="mt-20">
                              <div className="relative flex items-center my-4">
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                                    <span className="px-4 text-gray-500 uppercase text-3xl tracking-wide">Soup</span>
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                              </div>                              <MenuCategory item={soup} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                        {/* ----------- Pizza ----------- */}
                        <div className="mt-20">
                              <div className="relative flex items-center my-4">
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                                    <span className="px-4 text-gray-500 uppercase text-3xl tracking-wide">Pizza</span>
                                    <div className="flex-grow border-t-2 border-gray-400"></div>
                              </div>                              <MenuCategory item={pizza} />
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[40%] text-sm">Order Your Favorite Food</button>
                        </div>
                  </Container>
            </div>
      );
};

export default OurMenu;
