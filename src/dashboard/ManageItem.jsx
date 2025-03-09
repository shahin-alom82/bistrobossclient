import { RiDeleteBinLine } from "react-icons/ri";
import useMenu from "../contants/Hoks";
import { FiEdit } from "react-icons/fi";
import useAxiosSecure from "../contants/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const ManageItem = () => {

      const [menu, , refetch] = useMenu()
      const axiosSecure = useAxiosSecure()

      const handleDelete = (id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                  if (result.isConfirmed) {
                        const res = await axiosSecure.delete(`/menu/${id}`);
                        console.log('deleted', res.data)
                        if (res.data.deletedCount > 0) {
                              refetch()
                              Swal.fire({
                                    title: "Deleted!",
                                    text: "Cart item Deleted Successfully!",
                                    icon: "success"
                              });
                        }
                  }
            });
      }



      return (
            <div>
                  <h1 className="text-2xl text-yellow-600 tracking-wide">Total item : {menu?.length}</h1>


                  <div className="mt-10">

                        <div className="hidden py-4 px-4 uppercase rounded-t-xl  bg-yellow-500 lg:grid  text-xl font-medium grid-cols-5 justify-between w-full ">
                              <p>image</p>
                              <p>Name</p>
                              <p>Price</p>
                              <p className="pl-2">Delete</p>
                              <p className="pl-5">Edit</p>
                        </div>
                        <div>
                              {/* overflow-scroll h-80 */}
                              {menu.map((item, index) => (
                                    <div key={item?._id}>
                                          <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center  gap-6 py-4 border lg:border-none mt-2 lg:mt-0 px-4 lg:px-0">

                                                <div className="flex items-center flex-col lg:flex-row gap-8">
                                                      <p className="text-lg tracking-wide text-gray-800">{index + 1}</p>
                                                      <img src={item?.image} alt="img" className="h-20" />
                                                </div>
                                                <p className="text-lg tracking-wide text-gray-800 font-medium">{item?.name}</p>
                                                <p className="text-lg tracking-wide text-gray-800 font-medium">${item?.price}</p>
                                                <span onClick={() => handleDelete(item?._id)} className="cursor-pointer duration-300 text-red-600"><RiDeleteBinLine size={25} /></span>
                                                <Link to={`/dashboard/update/${item._id}`}>
                                                      <span className="cursor-pointer text-yellow-500 duration-300"> <FiEdit size={25} className="text-start" /></span>
                                                </Link>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default ManageItem;