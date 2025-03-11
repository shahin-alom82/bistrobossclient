// import { BsFillCartCheckFill } from "react-icons/bs";
// import { FaBasketShopping, FaSackDollar } from "react-icons/fa6";
// import { GiTeamIdea } from "react-icons/gi";
// import useAxiosSecure from "../contants/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../contants/useAuth";

// const AdminHome = () => {
//       const { user } = useAuth()
//       const axiosSecure = useAxiosSecure();

//       const { data: state } = useQuery({
//             queryKey: ["admin-states"],
//             queryFn: async () => {
//                   const res = await axiosSecure.get("/admin-states");
//                   return res.data;
//             },
//       });
//       return (
//             <div>
//                   <h1 className="text-yellow-600 tracking-wide text-2xl flex items-center gap-2">
//                         <span>Hi, Wellcome</span>
//                         {
//                               user?.displayName ? user?.displayName : 'Back'
//                         }
//                   </h1>
//                   <div className="flex flex-col lg:flex-row items-center mt-10 gap-6 text-gray-800">
//                         <div className="bg-yellow-400 flex items-center gap-6 py-3 px-8">
//                               <span><FaSackDollar size={30} /></span>
//                               <div>
//                                     <h1 className="text-2xl">Revenue</h1>
//                                     <h1 className="text-xl">${state?.revenue}</h1>
//                               </div>
//                         </div>
//                         <div className="bg-red-400 flex items-center gap-6 py-3 px-8">
//                               <span><GiTeamIdea size={30} /></span>
//                               <div>
//                                     <h1 className="text-2xl">Customers</h1>
//                                     <h1 className="text-xl">{state?.users || 1500}</h1>
//                               </div>
//                         </div>
//                         <div className="bg-green-400 flex items-center gap-6 py-3 px-8">
//                               <span><FaBasketShopping size={30} /></span>
//                               <div>
//                                     <h1 className="text-2xl">Products</h1>
//                                     <h1 className="text-xl">{state?.menuItems || 103}</h1>
//                               </div>
//                         </div>
//                         <div className="bg-blue-400 flex items-center gap-6 py-3 px-8">
//                               <span><BsFillCartCheckFill size={30} /></span>
//                               <div>
//                                     <h1 className="text-2xl">Orders</h1>
//                                     <h1 className="text-xl">{state?.orders || 500}</h1>
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       );
// };

// export default AdminHome;






import { BsFillCartCheckFill } from "react-icons/bs";
import { FaBasketShopping, FaSackDollar } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import useAxiosSecure from "../contants/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../contants/useAuth";

const AdminHome = () => {
      const { user } = useAuth();
      const axiosSecure = useAxiosSecure();

      const { data: state } = useQuery({
            queryKey: ["admin-states"],
            queryFn: async () => {
                  const res = await axiosSecure.get("/admin-states");
                  return res.data;
            },
      });

      const stats = [
            {
                  title: "Revenue",
                  value: `$${state?.revenue || 0}`,
                  icon: <FaSackDollar size={30} />,
                  gradient: "from-yellow-400 to-yellow-600",
            },
            {
                  title: "Customers",
                  value: state?.users || 1500,
                  icon: <GiTeamIdea size={30} />,
                  gradient: "from-red-400 to-red-600",
            },
            {
                  title: "Products",
                  value: state?.menuItems || 103,
                  icon: <FaBasketShopping size={30} />,
                  gradient: "from-green-400 to-green-600",
            },
            {
                  title: "Orders",
                  value: state?.orders || 500,
                  icon: <BsFillCartCheckFill size={30} />,
                  gradient: "from-blue-400 to-blue-600",
            },
      ];

      return (
            <div className="max-w-screen-lg">
                  <h1 className="text-yellow-600 tracking-wide lg:text-2xl flex items-center gap-2 font-medium">
                        <span>Hi, Welcome</span>
                        {user?.displayName ? user?.displayName : "Back"}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {stats.map((stat, index) => (
                              <div
                                    key={index}
                                    className={`bg-gradient-to-r ${stat.gradient} flex items-center gap-6 p-4  rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-60`}
                              >
                                    <span className="text-gray-200">{stat.icon}</span>
                                    <div className=" text-gray-200">
                                          <h1 className="text-2xl font-semibold">{stat.title}</h1>
                                          <h1 className="text-xl font-medium">{stat.value}</h1>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default AdminHome;
