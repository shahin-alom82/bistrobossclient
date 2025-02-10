import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [errEmail, setErrEmail] = useState("");
      const [errPassword, setErrPassword] = useState("");
      const [loading, setLoading] = useState(false);
      const [disabled, setDisabled] = useState(true)

      const handleLogin = (event) => {
            event.preventDefault();

            // Reset previous errors
            setErrEmail("");
            setErrPassword("");

            if (!email) {
                  setErrEmail("Email is required");
                  return;
            }
            if (!password) {
                  setErrPassword("Password is required");
                  return;
            }

            setLoading(true);

            setTimeout(() => {
                  setLoading(false);
            }, 2000);
      };

      useEffect(() => {
            loadCaptchaEnginge(4)
      }, [])

      // Captcha Validate
      const handleValidateCaptcha = (e) => {
            const user_captcha_value = e.target.value;
            if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false)
            }
            else {
                  setDisabled(true)
            }
      }

      return (
            <div className="py-48 max-w-screen-sm mx-auto">
                  <Container>
                        <form
                              onSubmit={handleLogin}
                              className="max-w-sm mx-auto border-b-4 border-t border-l border-r border-gray-400 px-6 py-4"
                        >
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
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errEmail && (
                                          <p className="text-xs px-2 mt-1 text-red-700 font-medium">
                                                {errEmail}
                                          </p>
                                    )}
                              </div>
                              <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                          Your password
                                    </label>
                                    <input
                                          type="password"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3"
                                          required
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errPassword && (
                                          <p className="text-xs px-2 mt-1 text-red-700 font-medium">
                                                {errPassword}
                                          </p>
                                    )}
                              </div>
                              <div className="">
                                    <LoadCanvasTemplate />
                                    <input onBlur={handleValidateCaptcha} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none py-2 w-full px-3 mt-4" type="text" name="captcha" placeholder="Type The Captcha Above" />
                              </div>
                              <button
                                    type="submit"
                                    disabled={disabled}
                                    className="bg-[#112240] w-full py-2 mt-4 text-white rounded-full hover:bg-black disabled:bg-gray-400 disabled:cursor-not-allowed"
                              >
                                    {loading ? "Processing..." : "Login"}
                              </button>

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
