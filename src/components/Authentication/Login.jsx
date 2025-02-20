import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import { AuthContext } from "../../firebase/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {


      const { loginUser } = useContext(AuthContext)

      const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            loginUser(email, password)
                  .then(result => {
                        const user = result.user
                        console.log(user)
                        form.reset()
                  })
      }



      return (
            <div className="py-48 max-w-screen-sm mx-auto">
                     <Helmet>
                                          <title>Bistro Boss | Login</title>
                                    </Helmet>
                  <Container>
                        <form onSubmit={handleLogin} className="max-w-sm mx-auto border-b-4 border-t border-l border-r border-gray-400 px-6 py-4">
                              <h1 className="text-xl underline underline-offset-[5px]">Login Page</h1>

                              <div className="mb-5 mt-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                          Your email
                                    </label>
                                    <input
                                          type="email"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          placeholder="name@name.com"
                                          required
                                          name="email"
                                    />
                              </div>

                              <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                          Your password
                                    </label>
                                    <input
                                          type="password"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          required
                                          name="password"

                                    />
                              </div>

                              <button
                                    type="submit"
                                    className="bg-[#112240] w-full py-2 mt-4 duration-300 text-white rounded-full hover:bg-black"
                              >
                                    Login
                              </button>
                              <div className="mt-3">
                                    <p className="text-center text-sm tracking-wide">Or Login With</p>
                                    <div className="flex items-center gap-4 justify-center mt-2">
                                          <FcGoogle size={25} />
                                          <FaFacebookF size={20} className="text-blue-700" />
                                    </div>
                              </div>

                              <p className="mt-2 text-center text-sm tracking-wide">
                                    Do not have an account?{" "}
                                    <Link to="/register">
                                          <span className="underline underline-offset-[5px]">Sign Up</span>
                                    </Link>
                              </p>

                        </form>
                  </Container>
            </div>
      );
};

export default Login;
