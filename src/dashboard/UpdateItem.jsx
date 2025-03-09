import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../contants/useAxiosPublic";
import useAxiosSecure from "../contants/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {

      const { name, category, recipe, price, _id } = useLoaderData();
      console.log('name , category, recipe', useLoaderData)
      const navigate = useNavigate();
      const { register, handleSubmit } = useForm();
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
      const onSubmit = async (data) => {
            console.log('dacnhahncadncadn', data);
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                        "content-type": "multipart/form-data",
                  },
            });
            if (res.data.success) {
                  const menuItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: res.data.data.display_url,
                  };
                  const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                  console.log('data', menuRes.data);
                  if (menuRes.data.modifiedCount > 0) {
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${data.name} is updated to the menu.`,
                              showConfirmButton: false,
                              timer: 1500,
                        });
                        navigate("/dashboard/manageitems");
                  }
            }
            console.log("with image url", res.data);
      };

      return (
            <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-10 lg:max-w-screen-md lg:mx-auto">
                        <div className="hidden md:block">
                              <h1 className="text-2xl text-yellow-600">--- Update Menu item ---</h1>
                        </div>
                        <form
                              className="mt-10 flex flex-col gap-4"
                              onSubmit={handleSubmit(onSubmit)}
                        >
                              {/* Name Input */}
                              <div>
                                    <label className="block text-gray-700 font-medium">Name* </label>
                                    <input
                                          {...register("name")}
                                          className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
                                          placeholder="Enter item name"
                                          defaultValue={name}
                                          required
                                    />
                              </div>

                              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {/* Category Select */}
                                    <div className="w-full md:w-1/2">
                                          <label className="block text-gray-700 font-medium">Category*</label>
                                          <select defaultValue={category}
                                                {...register("category")}
                                                className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded placeholder:text-gray-700 text-gray-800 bg-white "
                                                required
                                          >
                                                <option value="default" disabled >
                                                      Select a Category
                                                </option>
                                                <option value="salad">Salad</option>
                                                <option value="pizza">Pizza</option>
                                                <option value="soup">Soup</option>
                                                <option value="dessert">Dessert</option>
                                                <option value="drinks">Drinks</option>
                                          </select>
                                    </div>

                                    {/* Price Input */}
                                    <div className="w-full md:w-1/2">
                                          <label className="block text-gray-700 font-medium">Price*</label>
                                          <input
                                                {...register("price")}
                                                type="number"
                                                className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 text-gray-700 rounded mt-2"
                                                placeholder="Enter price"
                                                defaultValue={price}
                                                required
                                          />
                                    </div>
                              </div>

                              {/* Recipe Details */}
                              <div>
                                    <label className="block text-gray-700 font-medium">Recipe Details*</label>
                                    <textarea
                                          {...register("recipe")}
                                          className="w-full px-3 py-2 border border-gray-400 outline-none placeholder:text-gray-700 rounded mt-2"
                                          rows="3"
                                          placeholder="Enter recipe details"
                                          defaultValue={recipe}
                                          required
                                    ></textarea>
                              </div>

                              {/* File Upload */}
                              <div>
                                    <label className="block text-gray-700 font-medium">Choose a File</label>
                                    <input
                                          {...register("image")}
                                          required
                                          type="file"
                                          className="w-full outline-none placeholder:text-gray-700 rounded mt-2"
                                    />
                              </div>

                              {/* Submit Button */}
                              <button
                                    type="submit"
                                    className="mt-2 w-48 bg-yellow-600 text-white rounded py-2 px-4 flex items-center gap-2"
                              >
                                    <FaUtensils size={13} />
                                    Update Menu Item
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default UpdateItem;