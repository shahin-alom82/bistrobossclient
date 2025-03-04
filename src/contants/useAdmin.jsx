import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
      const { user } = useAuth()
      const axiosSecure = useAxiosSecure()
      const { data: isAdmin, isPending: isPendingLoading } = useQuery({
            queryKey: [user?.email, 'isAdmin'],
            queryFn: async () => {
                  const res = await axiosSecure.get(`/users/admin/${user?.email}`)
                  // console.log("fdddddddddddddgh",res.data)
                  return res.data.admin
            }
      })
      return [isAdmin, isPendingLoading]
};

export default useAdmin;