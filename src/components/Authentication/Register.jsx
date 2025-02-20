import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "../Container";
import { AuthContext } from "../../firebase/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
      const [loading, setLoading] = useState(false);
      const { createUser } = useContext(AuthContext);

      const handleRegister = (event) => {
            event.preventDefault();
            setLoading(true);
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;

            console.log(name, email, password);

            createUser(email, password)
                  .then((result) => {
                        console.log(result.user);
                        setLoading(false);
                        form.reset()
                  })
                  .catch((error) => {
                        console.error(error);
                        setLoading(false);
                  });
      };

      return (
            <div className="py-[130px]" style={{ backgroundImage: "url('https://i.ibb.co.com/jkQMLhZ7/menu-bg.png')" }}>
                  <Helmet>
                        <title>Bistro Boss | Register</title>
                  </Helmet>
                  <Container>
                        <form
                              onSubmit={handleRegister}
                              className="max-w-sm mx-auto border-b-4 border-t border-l border-r border-gray-400 px-6 py-4"
                        >
                              <h1 className="text-xl underline underline-offset-[5px]">
                                    Sign up page
                              </h1>
                              <div className="mb-5 mt-4">
                                    <label
                                          htmlFor="name"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                          Your name
                                    </label>
                                    <input
                                          type="text"
                                          id="name"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          placeholder="Your Name"
                                          required
                                          name="name"
                                    />
                              </div>
                              <div className="mb-5 mt-4">
                                    <label
                                          htmlFor="email"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                          Your email
                                    </label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          placeholder="name@name.com"
                                          required
                                          name="email"
                                    />
                              </div>
                              <div className="mb-5">
                                    <label
                                          htmlFor="password"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                          Your password
                                    </label>
                                    <input
                                          type="password"
                                          id="password"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          required
                                          name="password"
                                    />
                              </div>
                           
                              <button
                                    type="submit"
                                    className="bg-[#112240] duration-300 w-full py-2 text-white rounded-full hover:bg-black hoverEffect disabled:bg-gray-400 disabled:cursor-not-allowed"
                              >
                                    Create Account
                              </button>
                              <div className="mt-3">
                                    <p className="text-center text-sm tracking-wide">Or Login With</p>
                                    <div className="flex items-center gap-4 justify-center mt-2">
                                          <FcGoogle size={25} />
                                          <FaFacebookF size={20} className="text-blue-700" />
                                    </div>
                              </div>
                              <p className="mt-2 text-center text-sm tracking-wide">
                                    Already have an Account?{" "}
                                    <Link to={"/login"}>
                                          <span className="underline underline-offset-[5px]">Login</span>
                                    </Link>
                              </p>
                        </form>
                  </Container>
            </div>
      );
};

export default Register;
