import useAuth from "../contants/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import useAxiosPublic from "../contants/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
      const { googleLogin } = useAuth()
      const axiosPublic = useAxiosPublic()
      const navigate = useNavigate()
      const handleGoogle = () => {
            googleLogin()
                  .then(result => {
                        console.log('user', result.user)
                        const userInfo = {
                              name: result.user?.displayName,
                              email: result.user?.email
                        }
                        axiosPublic.post('/users', userInfo)
                              .then(res => {
                                    console.log(res)
                                    navigate('/')
                              })
                  })
      }
      return (
            <div>
                  <p className="text-center text-sm tracking-wide">Or Login With</p>
                  <div className="flex items-center gap-4 justify-center mt-2">
                        <button onClick={handleGoogle}><FcGoogle size={25} /></button>
                        <FaFacebookF size={20} className="text-blue-700" />
                  </div>
            </div>
      );
};

export default SocialLogin;