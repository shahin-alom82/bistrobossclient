import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../contants/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../contants/useAxiosSecure";

const OrderCart = ({ item }) => {
      const { user } = useAuth()
      const navigate = useNavigate()
      const location = useLocation()
      const axiosSecure = useAxiosSecure()
      const handleAddToCart = food => {
            if (user && user?.email) {
                  const cartItem = {
                        menuId: food?._id,
                        email: user?.email,
                        name: food?.name,
                        image: food?.image,
                        price: food?.price
                  }
                  axiosSecure.post('/carts', cartItem)
                        .then(res => {
                              if (res.data.insertedId) {
                                    Swal.fire({
                                          position: "top-center",
                                          icon: "success",
                                          title: `${food?.name} Added Successfully!`,
                                          showConfirmButton: false,
                                          timer: 1500
                                    });
                              }
                        })
            }
            else {
                  Swal.fire({
                        title: "You are not login?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Login!"
                  }).then((result) => {
                        if (result.isConfirmed) {
                              navigate("/login", { state: { form: location.pathname } })
                        }
                  });
            }
      }
      return (
            <div>
                  <div className="border-2 border-yellow-500 rounded-lg relative">
                        <img src={item.image} alt={item.name} className="w-full h-48 rounded-t-lg" />
                        <div className="py-2 px-2">
                              <h3 className="text-xl mt-2 font-medium tracking-wide">{item.name}</h3>
                              <p className="text-gray-500 mt-2 h-16">{item.recipe.slice(0, 60)}</p>
                              <button onClick={() => handleAddToCart(item)} className="w-full bg-yellow-600 py-1.5 rounded-full text-white mt-1 mb-1">Add To Cart</button>
                              <p className="text-white absolute top-2 right-2 py-0.5 bg-black opacity-70 px-1.5 rounded text-sm">${item.price}</p>
                        </div>
                  </div>
            </div>
      );
};

export default OrderCart;