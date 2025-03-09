import { BsFillCartCheckFill } from "react-icons/bs";
import { FaBasketShopping, FaSackDollar } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";

const AdminHome = () => {
      return (
            <div>
                  <h1 className="text-yellow-600 tracking-wide text-2xl">--- Admin Home ---</h1>
                  <div className="flex flex-col lg:flex-row items-center mt-10 gap-6 text-gray-800">
                        <div className="bg-yellow-400 flex items-center gap-6 py-3 px-8">
                              <span><FaSackDollar size={30} /></span>
                              <div>
                                    <h1 className="text-2xl">Revenue</h1>
                                    <h1 className="text-xl">${'34543'}</h1>
                              </div>
                        </div>
                        <div className="bg-red-400 flex items-center gap-6 py-3 px-8">
                              <span><GiTeamIdea size={30} /></span>
                              <div>
                                    <h1 className="text-2xl">Customers</h1>
                                    <h1 className="text-xl">{'43'}</h1>
                              </div>
                        </div>
                        <div className="bg-green-400 flex items-center gap-6 py-3 px-8">
                              <span><FaBasketShopping size={30} /></span>
                              <div>
                                    <h1 className="text-2xl">Products</h1>
                                    <h1 className="text-xl">{'33'}</h1>
                              </div>
                        </div>
                        <div className="bg-blue-400 flex items-center gap-6 py-3 px-8">
                              <span><BsFillCartCheckFill size={30} /></span>
                              <div>
                                    <h1 className="text-2xl">Orders</h1>
                                    <h1 className="text-xl">{'435'}</h1>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AdminHome;