
import { AiOutlineHome } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../contants/useCart";
import { FaBook, FaList, FaUtensils } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";

const Sidebar = () => {
      const [cart] = useCart()

      const isAdmin = true
      return (
            <div>
                  <p className="text-[16px] tracking-wide font-semibold uppercase text-gray-800 hidden md:block">Well Come To Dashboard</p>
                  <div className="w-full h-full mt-6">
                        <div className="flex flex-col gap-4 mt-2">


                              {
                                    isAdmin ?
                                          <>
                                                {/* Admin Home */}
                                                <NavLink to={"/dashboard/adminHome"} className={"flex  items-center gap-4"}>
                                                      <span><AiOutlineHome size={22} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">Admin Home</p>
                                                </NavLink>
                                                {/* Add Items */}
                                                <NavLink to={"/dashboard/additems"} className={"flex  items-center gap-4"}>
                                                      <span><FaUtensils size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">Add Items</p>
                                                </NavLink>
                                                {/* Manage Items */}
                                                <NavLink to={"/dashboard/manageitems"} className={"flex  items-center gap-4"}>
                                                      <span><FaList size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">Manage Items</p>
                                                </NavLink>
                                                {/* Manage Bookings */}
                                                <NavLink to={"/dashboard/bookings"} className={"flex  items-center gap-4"}>
                                                      <span><FaBook size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">Manage Bookings</p>
                                                </NavLink>
                                                {/* Manage Bookings */}
                                                <NavLink to={"/dashboard/allusers"} className={"flex  items-center gap-4"}>
                                                      <span><HiMiniUserGroup size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">All Users</p>
                                                </NavLink>

                                          </>
                                          :
                                          <>
                                                {/* User Home */}
                                                <NavLink to={"/dashboard/userHome"} className={"flex  items-center gap-4"}>
                                                      <span><AiOutlineHome size={22} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">User Home</p>
                                                </NavLink>
                                                {/* cart */}
                                                <NavLink to={"/dashboard/cart"} className={"flex  items-center gap-4"}>
                                                      <span><LuShoppingBag size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">My Cart {cart?.length}</p>
                                                </NavLink>
                                                {/* Payment */}
                                                <NavLink to={"/dashboard/payment"} className={"flex  items-center gap-4"}>
                                                      <span><MdPayment size={20} /></span>
                                                      <p className="hidden md:block text-[18px] tracking-wide font-medium">Payment History</p>
                                                </NavLink>

                                          </>
                              }

                              {/* Shaerd Nav */}
                              <p className="border border-gray-300 mt-5"></p>
                              <div>
                                    {/* Home */}
                                    <NavLink to={"/"} className={"flex  items-center gap-4 mt-4"}>
                                          <span><AiOutlineHome size={22} /></span>
                                          <p className="hidden md:block text-[18px] tracking-wide font-medium">Home</p>
                                    </NavLink>
                                    {/* Menu */}
                                    <NavLink to={"/order"} className={"flex  items-center gap-4 mt-4"}>
                                          <span><IoSearchSharp size={20} /></span>
                                          <p className="hidden md:block text-[18px] tracking-wide font-medium">Menu</p>
                                    </NavLink>
                                    {/* Contact */}
                                    <NavLink to={"/contact"} className={"flex  items-center gap-4 mt-4"}>
                                          <span><GrContact size={18} /></span>
                                          <p className="hidden md:block text-[18px] tracking-wide font-medium text-yellow-500">Contact</p>
                                    </NavLink>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Sidebar;