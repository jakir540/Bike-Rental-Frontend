import { useState } from "react";
import { useUpdateBikeMutation } from "@/redux/features/Bikes/Bikes";
import { TBike } from "@/types";

const UpdateBikeModal = ({ bike, onClose }: { bike: TBike }) => {
  const [updateBike] = useUpdateBikeMutation();
  const [formData, setFormData] = useState({
    brand: bike.brand,
    model: bike.model,
    pricePerHour: Number(bike.pricePerHour),
    cc: bike.cc,
    year: bike.year,
    availability: bike?.availability,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await updateBike({ id: bike._id, updateData: formData }).unwrap();
      onClose();
    } catch (error) {
      console.error("Failed to update the bike", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-[#DE4313]">
          Update Bike
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pricePerHour"
              className="block text-sm font-medium text-gray-700"
            >
              Price Per Hour
            </label>
            <input
              type="number"
              id="pricePerHour"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cc"
              className="block text-sm font-medium text-gray-700"
            >
              CC
            </label>
            <input
              type="number"
              id="cc"
              name="cc"
              value={formData.cc}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#DE4313] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
          >
            Update Bike
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBikeModal;
