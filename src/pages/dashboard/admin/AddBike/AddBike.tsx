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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-10">
        <h1 className="text-5xl font-bold text-center text-[#0D3B66] mb-8">
          Add A New Bike
        </h1>

        <div className="space-y-4">
          {isLoading && (
            <p className="text-center text-blue-600 animate-pulse font-medium">
              Adding bike...
            </p>
          )}
          {isSuccess && (
            <p className="text-center text-green-600 font-medium">
              Bike added successfully!
            </p>
          )}
          {isError && (
            <p className="text-center text-red-600 font-medium">
              Failed to add bike.
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Bike Name"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Bike Description"
              rows={4}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Price
            </label>
            <input
              {...register("pricePerHour", { required: true })}
              type="number"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Bike Price"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              CC
            </label>
            <input
              {...register("cc", { required: true })}
              type="number"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Engine CC"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Year
            </label>
            <input
              {...register("year", { required: true })}
              type="number"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Year of Manufacture"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Model
            </label>
            <input
              {...register("model", { required: true })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Bike Model"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Brand
            </label>
            <input
              {...register("brand", { required: true })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Bike Brand"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              {...register("image", { required: true })}
              type="url"
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] transition"
              placeholder="Enter Image URL"
            />
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#0D3B66] text-white font-semibold py-3 px-8 rounded-[8px] shadow-md hover:bg-[#07324A] hover:scale-105 transform transition-all duration-300"
            >
              Add Bike
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBike;
