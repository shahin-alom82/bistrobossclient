import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../contants/useAuth";


const PrivateRoute = ({ children }) => {
      const location = useLocation()

      const { user, loading } = useAuth()
      if (loading) {
            return <span className="loading loading-dots loading-lg mx-auto mt-[200px] lg:ml-[700px] ml-32"></span>;
      }
      if (user) {
            return children;
      }
      return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivateRoute;