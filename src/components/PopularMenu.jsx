import SectionTitle from "../contants/SectionTitle";
import Container from "./Container";
import MenuCarts from "../contants/MenuCarts";
import { Link } from "react-router-dom";
import useMenu from "../contants/Hoks";

const PopularMenu = () => {

      const [menu] = useMenu()
      const popular = menu.filter((item) => item.category === 'popular')
      return (
            <div className="mt-10">
                  <Container>
                        <SectionTitle
                              topHeading={"Popular Items"}
                              middleHeading={"From our Menu"}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-6">
                              {
                                    popular.map((item) => <MenuCarts key={item?._id} item={item} />)
                              }
                        </div>
                        <Link to={"/menu"}>
                              <button className="py-2 rounded-lg px-4 text-black tracking-wide font-medium uppercase border-b-4 border-b-gray-400 mt-10 lg:ml-[43%] text-sm">View Full Menu</button>
                        </Link>
                  </Container>
            </div>
      );
};

export default PopularMenu;