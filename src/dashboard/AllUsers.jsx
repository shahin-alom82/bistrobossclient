import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../contants/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const AllUsers = () => {
      const axiosSecure = useAxiosSecure()
      const { data: users = [], refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const res = await axiosSecure.get('/users');
                  return res.data
            }
      })

      // Delete Related Data
      const handleDelete = id => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/users/${id}`)
                              .then(res => {
                                    if (res?.data.deletedCount > 0) {
                                          refetch()
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "User Deleted Successfully!",
                                                icon: "success"
                                          });
                                    }
                              })
                  }
            });

      }
      // Update Related Data

      const handleMakeAdmin = user => {
            axiosSecure.patch(`/users/admin/${user._id}`)
                  .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${user.name} is an Admin Now!`,
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                              refetch()
                        }
                  })
      }

      return (
            <div>
                  <div>
                        <div className="flex flex-col lg:flex-row justify-between items-center text-xl font-medium">
                              <h1>Total User : {users?.length}</h1>
                        </div>

                        <div className="mt-10">

                              <div className="hidden py-4 px-4 uppercase rounded-t-xl  bg-yellow-500 lg:grid  text-xl font-medium grid-cols-5 justify-between w-full ">
                                    <p>SL.No</p>
                                    <p>Name</p>
                                    <p>Email</p>
                                    <p className="pl-24">Delete</p>
                                    <p className="pl-24">Role</p>
                              </div>
                              <div>
                                    {/* overflow-scroll h-80 */}
                                    {users.map((item, index) => (
                                          <div key={item?._id}>
                                                <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center  gap-6 py-4 border lg:border-none mt-2 lg:mt-0 px-4 lg:px-0">

                                                      <p className="ml-6 text-lg hidden md:block">{index + 1}</p>
                                                      <p className="text-lg tracking-wide text-gray-800 font-medium">{item?.name}</p>
                                                      <p className="text-lg tracking-wide text-gray-800 font-medium">{item?.email}</p>
                                                      <span onClick={() => handleDelete(item?._id)} className="cursor-pointer duration-300 text-red-600 lg:ml-24"><RiDeleteBinLine size={20} /></span>
                                                      {
                                                            item.role === "admin" ? "Admin" : <span onClick={() => handleMakeAdmin(item)} className="cursor-pointer text-blue-600 duration-300 lg:ml-20"> <FiEdit size={20} className="text-start" /></span>
                                                      }
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AllUsers;