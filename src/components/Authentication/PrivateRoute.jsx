import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";



const PrivateRoute = ({ children }) => {
      const location = useLocation()

      const { user, loading } = useContext(AuthContext)
      if (loading) {
            return <span className="loading loading-dots loading-lg mx-auto mt-[200px] lg:ml-[700px] ml-32"></span>;
      }
      if (user) {
            return children;
      }
      return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivateRoute;