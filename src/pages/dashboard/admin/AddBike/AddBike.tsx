import { useCreateBikeMutation } from "@/redux/features/Bikes/Bikes";
import { TBike } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

function AddBike() {
  // Specify the form type as TBike
  const { register, handleSubmit, reset } = useForm<TBike>();
  const [createBike, { isLoading, isSuccess, isError }] =
    useCreateBikeMutation();

  const onSubmit: SubmitHandler<TBike> = async (data) => {
    const bikeData = {
      ...data,
      cc: Number(data.cc),
      pricePerHour: Number(data.pricePerHour),
    };
    try {
      // Trigger the create bike mutation
      const response = await createBike(bikeData).unwrap();

      console.log("Bike added successfully:", response);
      // Reset form if submission is successful
      reset();
    } catch (error) {
      console.error("Failed to add bike:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-[8px] mt-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0D3B66]">
        Add A New Bike
      </h1>

      {/* Show loading, success, or error messages */}
      {isLoading && <p className="text-center text-blue-500">Adding bike...</p>}
      {isSuccess && (
        <p className="text-center text-green-500">Bike added successfully!</p>
      )}
      {isError && (
        <p className="text-center text-red-500">Failed to add bike.</p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Name"
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col md:col-span-2">
          <label className="block mb-2 font-medium text-gray-600">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Description"
            rows="4"
          />
        </div>

        {/* Price Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">Price</label>
          <input
            {...register("pricePerHour", { required: true })}
            type="number"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Price"
          />
        </div>

        {/* CC Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">CC</label>
          <input
            {...register("cc", { required: true })}
            type="number"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Engine CC"
          />
        </div>

        {/* Year Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">Year</label>
          <input
            {...register("year", { required: true })}
            type="number"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Year of Manufacture"
          />
        </div>

        {/* Model Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">Model</label>
          <input
            {...register("model", { required: true })}
            type="text"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Model"
          />
        </div>

        {/* Brand Field */}
        <div className="flex flex-col">
          <label className="block mb-2 font-medium text-gray-600">Brand</label>
          <input
            {...register("brand", { required: true })}
            type="text"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Brand"
          />
        </div>

        {/* Image URL Field */}
        <div className="flex flex-col md:col-span-2">
          <label className="block mb-2 font-medium text-gray-600">
            Image URL
          </label>
          <input
            {...register("image", { required: true })}
            type="url"
            className="w-full border border-gray-300 rounded-[8px] p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Image URL"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0D3B66] to-[#FA8C68] text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
          >
            Add Bike
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBike;
