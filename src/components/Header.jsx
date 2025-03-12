// import { FaRegUser } from "react-icons/fa";
// import { BsFillCartCheckFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import Container from "./Container";
// import { useContext } from "react";
// import { AuthContext } from "../firebase/AuthProvider";
// import { MdLogout } from "react-icons/md";
// import useCart from "../contants/useCart";
// import { IoCloseSharp } from "react-icons/io5";

// const Header = () => {
//       const { user, logOut } = useContext(AuthContext);
//       const [cart] = useCart()

//       const handleLogout = async () => {
//             try {
//                   await logOut();
//             } catch (error) {
//                   console.error("Logout error:", error);
//             }
//       };
//       const nav = [
//             { path: "/", title: "Home" },
//             { path: "/menu", title: "Our Menu" },
//             { path: "/order", title: "Our Shop" },
//             { path: "/contact", title: "Contact Us" },
//             // { path: "/dashboard", title: "Dashboard" },
//       ];

//       if (user) {
//             nav.push({ path: "/dashboard", title: "Dashboard" });
//       }
//       return (
//             <div>
//                   <Container className="lg:fixed top-0 left-0 right-0 z-10 opacity-70 text-white bg-black">
//                         <div className="flex items-center justify-between py-5 lg:px-7">
//                               {/* ---------Logo ------------ */}
//                               <Link to={"/"}>
//                                     <h1 className="lg:text-3xl text-xl font-semibold uppercase tracking-wide hover:text-gray-300 duration-300 cursor-pointer">
//                                           Bistro Boss
//                                     </h1>
//                               </Link>

//                               {/* ---------- Nav ----------- */}
//                               <div className="lg:flex items-center gap-6 text-white hidden md:block">
//                                     {nav.map((item, index) => (
//                                           <div key={index}>
//                                                 <Link to={item?.path}>
//                                                       <h1 className="text-[16px] tracking-wide uppercase">{item?.title}</h1>
//                                                 </Link>
//                                           </div>
//                                     ))}
//                               </div>
//                               {/* ------ Login & Cart icons ------ */}
//                               <div className="lg:flex items-center gap-16 text-white hidden md:block">
//                                     {user ? (
//                                           <div onClick={handleLogout} className="flex items-center gap-2">
//                                                 <button
//                                                       className="text-white hover:text-rose-500 duration-700 rounded-md text-[18px]">
//                                                       Logout
//                                                 </button>
//                                                 <MdLogout size={20} className="text-red-500" />
//                                           </div>
//                                     ) : (
//                                           <Link to={'/login'}>
//                                                 <div className="flex items-center gap-2">
//                                                       <span className="border border-white py-2 px-2 rounded-full text-white">
//                                                             <FaRegUser size={25} />
//                                                       </span>
//                                                       <div>
//                                                             <h1 className="tracking-wide">Hello, Guest</h1>
//                                                             <p className="text-sm tracking-wide">Login / Register</p>
//                                                       </div>
//                                                 </div>
//                                           </Link>
//                                     )}
//                                     <Link to={'/dashboard/cart'}>
//                                           <div className="relative">
//                                                 <BsFillCartCheckFill className="text-white" size={30} />
//                                                 <span className="absolute right-1 text-sm bottom-[26px] text-white px-1 rounded-full">{cart?.length}</span>
//                                           </div>
//                                     </Link>
//                               </div>
//                               {/* Mobile Nav */}
//                               <div className="block md:hidden">
//                                     <IoCloseSharp size={30} />
//                               </div>
//                         </div>
//                   </Container>
//             </div>
//       );
// };

// export default Header;






import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Container from "./Container";
import { AuthContext } from "../firebase/AuthProvider";
import useCart from "../contants/useCart";
import useAdmin from "../contants/useAdmin";

const Header = () => {
      const { user, logOut } = useContext(AuthContext);
      const [isAdmin] = useAdmin()
      console.log('user & isAdmin', user)
      const [cart] = useCart();
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const handleLogout = async () => {
            try {
                  await logOut();
            } catch (error) {
                  console.error("Logout error:", error);
            }
      };

      const nav = [
            { path: "/", title: "Home" },
            { path: "/menu", title: "Our Menu" },
            { path: "/order", title: "Our Shop" },
            { path: "/contact", title: "Contact Us" },

      ];

      if (user || isAdmin) {
            nav.push({ path: "/dashboard/adminHome", title: "Dashboard" });
      }






      return (
            <div>
                  <Container className="lg:fixed top-0 left-0 right-0 z-10 bg-black text-white opacity-80">
                        <div className="flex items-center justify-between py-5 px-5 lg:px-7">
                              {/* Logo */}
                              <Link to={"/"}>
                                    <h1 className="lg:text-3xl text-xl font-semibold uppercase tracking-wide hover:text-gray-300 duration-300 cursor-pointer">
                                          Bistro Boss
                                    </h1>
                              </Link>

                              {/* Desktop Nav */}
                              <div className="hidden md:flex items-center gap-6">
                                    {nav.map((item, index) => (
                                          <Link key={index} to={item.path} className="text-[16px] uppercase tracking-wide">
                                                {item.title}
                                          </Link>
                                    ))}
                              </div>

                              {/* Login & Cart */}
                              <div className="hidden md:flex items-center gap-6">
                                    {user ? (
                                          <div onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
                                                <button className="hover:text-rose-500 duration-700 text-[18px]">Logout</button>
                                                <MdLogout size={20} className="text-red-500" />
                                          </div>
                                    ) : (
                                          <Link to={"/login"}>
                                                <div className="flex items-center gap-2">
                                                      <span className="border border-white py-2 px-2 rounded-full">
                                                            <FaRegUser size={25} />
                                                      </span>
                                                      <div>
                                                            <h1 className="tracking-wide">Hello, Guest</h1>
                                                            <p className="text-sm tracking-wide">Login / Register</p>
                                                      </div>
                                                </div>
                                          </Link>
                                    )}
                                    <Link to={"/dashboard/cart"}>
                                          <div className="relative">
                                                <BsFillCartCheckFill className="text-white" size={30} />
                                                <span className="absolute right-1 bottom-[26px] text-sm text-white px-1 rounded-full">
                                                      {cart?.length}
                                                </span>
                                          </div>
                                    </Link>
                              </div>

                              {/* Mobile Menu Button */}
                              <div className="md:hidden">
                                    <button onClick={() => setIsMenuOpen(true)}>
                                          <IoMenuSharp size={30} />
                                    </button>
                              </div>
                        </div>
                  </Container>

                  {/* Mobile Nav Drawer */}
                  <div className={`fixed top-0 right-0 w-3/4 py-3 bg-black/80 text-white transition-transform duration-300 z-20 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex justify-between items-center p-5">
                              <h2 className="text-xl font-medium uppercase">Bistro Boss</h2>
                              <button onClick={() => setIsMenuOpen(false)}>
                                    <IoCloseSharp size={35} />
                              </button>
                        </div>
                        <div className="flex flex-col items-start gap-5 px-5">
                              {nav.map((item, index) => (
                                    <Link key={index} to={item.path} className="text-lg tracking-wide" onClick={() => setIsMenuOpen(false)}>
                                          {item.title}
                                    </Link>
                              ))}
                              <hr className="border-gray-700 w-full my-3" />
                              <Link to={"/dashboard/cart"} className="flex items-center gap-2 text-lg">
                                    <BsFillCartCheckFill size={25} />
                                    Cart ({cart?.length})
                              </Link>
                              {user ? (
                                    <button onClick={handleLogout} className="flex items-center gap-2 text-lg hover:text-rose-500">
                                          Logout <MdLogout size={20} className="text-red-500" />
                                    </button>
                              ) : (
                                    <Link to={"/login"} className="flex items-center gap-2 text-lg">
                                          <FaRegUser size={25} />
                                          Login / Register
                                    </Link>
                              )}

                        </div>
                  </div>

                  {/* Overlay for Mobile Menu */}
                  {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsMenuOpen(false)}></div>}
            </div>
      );
};

export default Header;

