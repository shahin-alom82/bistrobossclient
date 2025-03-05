import { useForm } from "react-hook-form";

const AddItem = () => {
      const { register, handleSubmit } = useForm(); 
      const onSubmit = (data) => {
            console.log(data);
      };

      return (
            <div>
                  <h1>Add Item</h1> 

                  <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input {...register("Name")} placeholder="First Name" />
                              <select {...register("Category")}>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                              </select>

                              <input type="submit" value="Submit" />
                        </form>
                  </div>
            </div>
      );
};

export default AddItem;
