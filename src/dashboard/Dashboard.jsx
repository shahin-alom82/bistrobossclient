import { Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../contants/useCart";
import { FaList, FaUtensils } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import useAdmin from "../contants/useAdmin";

const Dashboard = () => {

      const [cart] = useCart();
      const [isAdmin] = useAdmin();

      return (
            <div className="font-bodyFont">
                  <div className="flex w-full">
                        {/* Side bar */}
                        <div>
                              <div className="border-r-2 border-gray-300 md:w-[18%] min-h-screen fixed px-4 py-4">
                                    <div>
                                          <p className="text-[16px] tracking-wide font-semibold uppercase text-gray-800 hidden md:block">
                                                Well Come To Dashboard
                                          </p>
                                          <div className="w-full h-full mt-6">
                                                <div className="flex flex-col gap-4 mt-2">
                                                      {isAdmin ? (
                                                            <>
                                                                  <NavLink
                                                                        to="/dashboard/adminHome"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <AiOutlineHome size={22} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">Admin Home</p>
                                                                  </NavLink>
                                                                  <NavLink
                                                                        to="/dashboard/additems"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <FaUtensils size={20} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">Add Items</p>
                                                                  </NavLink>
                                                                  <NavLink
                                                                        to="/dashboard/manageitems"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <FaList size={20} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">Manage Items</p>
                                                                  </NavLink>
                                                                  <NavLink
                                                                        to="/dashboard/allusers"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <HiMiniUserGroup size={20} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">All Users</p>
                                                                  </NavLink>
                                                            </>
                                                      ) : (
                                                            <>
                                                                  <NavLink
                                                                        to="/dashboard/userHome"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <AiOutlineHome size={22} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">User Home</p>
                                                                  </NavLink>
                                                                  <NavLink
                                                                        to="/dashboard/cart"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <LuShoppingBag size={20} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">
                                                                              My Cart {cart?.length}
                                                                        </p>
                                                                  </NavLink>
                                                                  <NavLink
                                                                        to="/dashboard/paymenthistory"
                                                                        className={({ isActive }) =>
                                                                              `flex items-center gap-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                        }
                                                                  >
                                                                        <MdPayment size={20} />
                                                                        <p className="hidden md:block text-[18px] tracking-wide font-medium">Payment History</p>
                                                                  </NavLink>
                                                            </>
                                                      )}

                                                      {/* Shared Nav */}
                                                      <p className="border border-gray-300 mt-5"></p>
                                                      <div>
                                                            <NavLink
                                                                  to="/"
                                                                  className={({ isActive }) =>
                                                                        `flex items-center gap-4 mt-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                  }
                                                            >
                                                                  <AiOutlineHome size={22} />
                                                                  <p className="hidden md:block text-[18px] tracking-wide font-medium">Home</p>
                                                            </NavLink>
                                                            <NavLink
                                                                  to="/order"
                                                                  className={({ isActive }) =>
                                                                        `flex items-center gap-4 mt-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                  }
                                                            >
                                                                  <IoSearchSharp size={20} />
                                                                  <p className="hidden md:block text-[18px] tracking-wide font-medium">Menu</p>
                                                            </NavLink>
                                                            <NavLink
                                                                  to="/contact"
                                                                  className={({ isActive }) =>
                                                                        `flex items-center gap-4 mt-4 ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`
                                                                  }
                                                            >
                                                                  <GrContact size={18} />
                                                                  <p className="hidden md:block text-[18px] tracking-wide font-medium">Contact</p>
                                                            </NavLink>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* Content Section */}
                        <div className="flex-1 pr-10 py-4 md:ml-[20%] ml-20">
                              <Outlet />
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;