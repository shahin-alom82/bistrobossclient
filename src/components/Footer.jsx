import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
      return (
            <div className="text-white mt-10">
                  <Container>
                        <div className="flex flex-col lg:flex-row">
                              {/* ---------- Left Side ------------ */}
                              <div className="bg-[#112240] lg:w-[50%] text-center py-6">
                                    <h1 className="text-xl">CONTACT US</h1>
                                    <div className="mt-2 space-y-1">
                                          <p>Assim, Bashdi, Fulbaria, Mymensingh</p>
                                          <p>+88 01682247291</p>
                                          <p>Mon - Fri: 08:00 - 22:00</p>
                                          <p>Sat - Sun: 10:00 - 23:00</p>
                                    </div>
                              </div>
                              {/* ----------- Right Side ----------- */}
                              <div className=" bg-slate-700 lg:w-[50%] text-center py-6">
                                    <h1 className="text-xl uppercase">Follow US</h1>
                                    <div className="mt-2">
                                          <p>Join us on social media</p>
                                          <div className="flex items-center gap-4 justify-center mt-1.5">
                                                <FaFacebookF size={20} />
                                                <FaTwitter size={20} />
                                                <FaInstagram size={20} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* -------- Copy Right ---------- */}
                        <h1 className="bg-black text-xs lg:text-sm text-center py-2 tracking-wide">Copyright © CulinaryCloud. All rights reserved.</h1>
                  </Container>
            </div>
      );
};

export default Footer;