import { useFormAction } from "react-router-dom";

const AddItem = () => {
      // const { register, handleSubmit } = useFormAction()
      // const onSubmit = (data) => {
      //       console.log(data)
      // }
      return (
            <div>
                  <h>Add Item</h>
                  <div>
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                              <input {...register("firstName")} />
                              <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                              </select>
                              <input type="submit" />
                        </form> */}
                        
                  </div>
            </div>
      );
};

export default AddItem;