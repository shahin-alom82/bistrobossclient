import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '../Container';

const Register = () => {
      const [clientName, setClientName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [checked, setChecked] = useState(false)
      const [loading, setLoading] = useState(false)


      // Error State
      const [errClientName, setErrClientName] = useState("")
      const [errEmail, setErrEmail] = useState("")
      const [errPassword, setErrPassword] = useState("")




      const handleName = (e) => {
            setClientName(e.target.value)
            setErrClientName("")
      }

      const handleEmail = (e) => {
            setEmail(e.target.value)
            setErrEmail("")

      }
      const handlePassword = async (e) => {
            setPassword(e.target.value)
            setErrPassword("")

      }

      // Checked
      const handleChecked = (e) => {
            setChecked(e.target.checked)
      }




      return (
            <div className='py-10'>
                  <Container>
                        <form className="max-w-sm mx-auto border-b-4 border-t border-l border-r   border-gray-400  px-6 py-4">
                              <h1 className="text-xl underline underline-offset-[5px]">Sign up page</h1>
                              <div className="mb-5 mt-4">
                                    <label
                                          htmlFor="name"
                                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                          Your name
                                    </label>
                                    <input
                                          type="text"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          placeholder="Your Name"
                                          required
                                          value={clientName}
                                          onChange={handleName}
                                    />
                                    {errClientName && <p className='text-xs px-2 mt-1 text-red-700 font-medium'>{errClientName}</p>}
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
                              <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                          <input
                                                onClick={handleChecked}
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                required
                                          />
                                    </div>
                                    <label
                                          htmlFor="remember"
                                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                          Remember me
                                    </label>
                              </div>
                              <button
                                    disabled={!checked || loading}
                                    // onClick={handleSignUp}
                                    type="submit"
                                    className="bg-[#112240] w-full py-2 text-white  rounded-full hover:bg-black hoverEffect disabled:bg-gray-400 disabled:cursor-not-allowed"
                              >
                                    {loading ? 'Processing...' : 'Create Account'}
                              </button>
                              <p className="mt-2 text-center text-sm tracking-wide">Already have an Account? <Link to={"/login"}><span className="underline underline-offset-[5px]">Login</span></Link></p>
                        </form>

                  </Container>
            </div>
      );
};

export default Register;