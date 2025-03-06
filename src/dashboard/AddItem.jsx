import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../contants/SectionTitle";

const AddItem = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            console.log(data);
      };

      return (
            <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-10 lg:max-w-screen-md lg:mx-auto">
                        <div className="hidden md:block">
                              <SectionTitle topHeading={'Add item'} middleHeading={'Add item'} />
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
                                          required
                                    />
                              </div>

                              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    {/* Category Select */}
                                    <div className="w-full md:w-1/2">
                                          <label className="block text-gray-700 font-medium">Category*</label>
                                          <select
                                                {...register("category")}
                                                className="w-full px-3 py-2.5 border mt-2 border-gray-400 rounded placeholder:text-gray-700 text-gray-800 bg-white "
                                                required
                                          >
                                                <option value="" disabled selected >
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
                                          required
                                    ></textarea>
                              </div>

                              {/* File Upload */}
                              <div>
                                    <label className="block text-gray-700 font-medium">Choose a File</label>
                                    <input
                                          {...register("image")}
                                          type="file"
                                          className="w-full outline-none placeholder:text-gray-700 rounded mt-2"
                                    />
                              </div>

                              {/* Submit Button */}
                              <button
                                    type="submit"
                                    className="mt-2 w-32 border-green-600 border py-1 px-4 flex items-center gap-2"
                              >
                                    <FaUtensils size={13} />
                                    Add Item
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AddItem;
