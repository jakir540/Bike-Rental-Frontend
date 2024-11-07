import { useCreateBikeMutation } from "@/redux/features/Bikes/Bikes";
import { TBike } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

function AddBike() {
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
      const response = await createBike(bikeData).unwrap();
      console.log("Bike added successfully:", response);
      reset();
    } catch (error) {
      console.error("Failed to add bike:", error);
    }
  };

  return (
    <div className="container mx-auto p-10 bg-white shadow-xl rounded-2xl max-w-4xl">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-[#0D3B66]">
        Add A New Bike
      </h1>

      {isLoading && (
        <p className="text-center text-blue-600 animate-pulse">
          Adding bike...
        </p>
      )}
      {isSuccess && (
        <p className="text-center text-green-600 font-semibold">
          Bike added successfully!
        </p>
      )}
      {isError && (
        <p className="text-center text-red-600 font-semibold">
          Failed to add bike.
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Name"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Description"
            rows={4}
          />
        </div>

        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">
            Price
          </label>
          <input
            {...register("pricePerHour", { required: true })}
            type="number"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Price"
          />
        </div>

        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">CC</label>
          <input
            {...register("cc", { required: true })}
            type="number"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Engine CC"
          />
        </div>

        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">Year</label>
          <input
            {...register("year", { required: true })}
            type="number"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Year of Manufacture"
          />
        </div>

        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">
            Model
          </label>
          <input
            {...register("model", { required: true })}
            type="text"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Model"
          />
        </div>

        <div className="flex flex-col">
          <label className="block mb-1 font-semibold text-gray-700">
            Brand
          </label>
          <input
            {...register("brand", { required: true })}
            type="text"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Bike Brand"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">
            Image URL
          </label>
          <input
            {...register("image", { required: true })}
            type="url"
            className="w-full border border-gray-200 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition-all duration-300"
            placeholder="Enter Image URL"
          />
        </div>

        <div className="col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-[#0D3B66] text-white font-semibold py-3 px-8 rounded-[8px] shadow-md hover:bg-[#07324A] hover:scale-105 transform transition-all duration-300"
          >
            Add Bike
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBike;
