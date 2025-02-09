import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../Container";


const Login = () => {


      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [loading, setLoading] = useState(false)



      // Error State
      const [errEmail, setErrEmail] = useState("")
      const [errPassword, setErrPassword] = useState("")


      const handleEmail = (e) => {
            setEmail(e.target.value)
            setErrEmail("")
      }
      const handlePassword = async (e) => {
            setPassword(e.target.value)
            setErrPassword("")

      }



      return (
            <div className="">
                  <div className="py-48 max-w-screen-sm mx-auto">
                        <Container>
                              <form className="max-w-sm mx-auto border-b-4 border-t border-l border-r   border-gray-400  px-6 py-4">
                                    <h1 className="text-xl underline underline-offset-[5px]">Login page</h1>
                                    <div className="mb-5 mt-4">
                                          <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                          >
                                                Your email
                                          </label>
                                          <input
                                                type="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                                placeholder="name@name.com"
                                                required
                                                value={email}
                                                onChange={handleEmail}
                                          />
                                          {errEmail && <p className='text-xs px-2 mt-1 text-red-700 font-medium'>{errEmail}</p>}
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
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                                required
                                                value={password}
                                                onChange={handlePassword}
                                          />
                                          {errPassword && <p className='text-xs px-2 mt-1 text-red-700 font-medium'>{errPassword}</p>}
                                    </div>
                                    <button
                                          // onClick={handleLogin}
                                          disabled={loading}
                                          type="submit"
                                          className="bg-[#112240] w-full py-2 text-white  rounded-full hover:bg-black hoverEffect disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                          {loading ? 'Processing...' : 'Login'}
                                    </button>

                                    <p className="mt-2 text-center text-sm tracking-wide">Do not have an Account? <Link to={"/register"}><span className="underline underline-offset-[5px]">Sign Up</span></Link></p>
                              </form>

                        </Container>
                  </div>
            </div>
      );
};

export default Login;