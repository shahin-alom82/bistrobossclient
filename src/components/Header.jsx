import { FaRegUser } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { MdLogout } from "react-icons/md";
import { nav } from "../contants";
import useCart from "../contants/useCart";

const Header = () => {
      const { user, logOut } = useContext(AuthContext);
      const [cart] = useCart()

      const handleLogout = async () => {
            try {
                  await logOut();
            } catch (error) {
                  console.error("Logout error:", error);
            }
      };



      return (
            <div>
                  <Container className="lg:fixed top-0 left-0 right-0 z-10 opacity-70 text-white bg-black">
                        <div className="flex items-center justify-between py-5 lg:px-7">
                              {/* ---------Logo ------------ */}
                              <Link to={"/"}>
                                    <h1 className="lg:text-3xl text-xl font-semibold uppercase tracking-wide hover:text-gray-300 duration-300 cursor-pointer">
                                          Bistro Boss
                                    </h1>
                              </Link>

                              {/* ---------- Nav ----------- */}
                              <div className="lg:flex items-center gap-6 text-white hidden md:block">
                                    {nav.map((item, index) => (
                                          <div key={index}>
                                                <Link to={item?.path}>
                                                      <h1 className="text-[16px] tracking-wide uppercase">{item?.title}</h1>
                                                </Link>
                                          </div>
                                    ))}
                              </div>
                              {/* ------ Login & Cart icons ------ */}
                              <div className="lg:flex items-center gap-16 text-white hidden md:block">
                                    {user ? (
                                          <div onClick={handleLogout} className="flex items-center gap-2">
                                                <button
                                                      className="text-white hover:text-rose-500 duration-700 rounded-md text-[18px]">
                                                      Logout
                                                </button>
                                                <MdLogout size={20} className="text-red-500" />
                                          </div>
                                    ) : (
                                          <Link to={'/login'}>
                                                <div className="flex items-center gap-2">
                                                      <span className="border border-white py-2 px-2 rounded-full text-white">
                                                            <FaRegUser size={25} />
                                                      </span>
                                                      <div>
                                                            <h1 className="tracking-wide">Hello, Guest</h1>
                                                            <p className="text-sm tracking-wide">Login / Register</p>
                                                      </div>
                                                </div>
                                          </Link>
                                    )}
                                    <Link to={'/dashboard/cart'}>
                                          <div className="relative">
                                                <BsFillCartCheckFill className="text-white" size={30} />
                                                <span className="absolute right-1 text-sm bottom-[26px] text-white px-1 rounded-full">{cart?.length}</span>
                                          </div>
                                    </Link>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Header;
