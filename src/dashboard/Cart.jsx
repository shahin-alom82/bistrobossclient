import { FiEdit } from "react-icons/fi";
import useCart from "../contants/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../contants/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
      const [cart, refetch] = useCart()
      const totalprice = cart.reduce((total, item) => total + item.price, 0)
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
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/carts/${id}`)
                              .then(res => {
                                    if (res?.data.deletedCount > 0) {
                                          refetch()
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Cart item Deleted Successfully!",
                                                icon: "success"
                                          });
                                    }
                              })
                  }
            });

      }
      return (
            <div>
                  <div className="flex flex-col lg:flex-row justify-between items-center text-xl font-medium">

                        <h1 className="text-yellow-600">Total Item : {cart?.length}</h1>
                        <p className="text-yellow-600 text-xl">--- My Cart ---</p>
                        <div className="flex  flex-col lg:flex-row items-center lg:gap-20 gap-6">
                              <h1 className="mt-4 lg:mt-0 text-yellow-600">Total Price : ${totalprice.toFixed(2)}</h1>

                              {
                                    cart.length ? <Link to={'/dashboard/payment'}>
                                          <button className="bg-green-700 text-sm py-1.5 px-3 text-white">Pay Now</button>
                                    </Link>
                                          : <button disabled className="bg-gray-300 text-sm py-1.5 px-3 text-gray-400 cursor-not-allowed">Pay Now</button>
                              }

                        </div>
                  </div>

                  <div className="mt-10">

                        <div className="hidden py-4 px-4 uppercase rounded-t-xl  bg-yellow-500 lg:grid  text-xl font-medium grid-cols-4 justify-between w-full ">
                              <p>image</p>
                              <p>Name</p>
                              <p>Price</p>
                              <p className="pl-1">Delete</p>
                        </div>
                        <div>
                              {/* overflow-scroll h-80 */}
                              {cart.map((item, index) => (
                                    <div key={item?._id}>
                                          <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center  gap-6 py-4 border lg:border-none mt-2 lg:mt-0 px-4 lg:px-0">

                                                <div className="flex items-center gap-8">
                                                      <p className="text-lg tracking-wide text-gray-800">{index + 1}</p>
                                                      <img src={item?.image} alt="img" className="h-20" />
                                                </div>
                                                <p className="text-lg tracking-wide text-gray-800 font-medium">{item?.name}</p>
                                                <p className="text-lg tracking-wide text-gray-800 font-medium">${item?.price}</p>
                                                <span onClick={() => handleDelete(item?._id)} className="cursor-pointer duration-300 text-red-600"><RiDeleteBinLine size={20} /></span>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Cart;