import { useState } from "react";
import { useUpdateBikeMutation } from "@/redux/features/Bikes/Bikes";
import { TBike } from "@/types";
import toast from "react-hot-toast";

interface UpdateBikeModalProps {
  bike: TBike;
  onClose: () => void; // Declare onClose as a function type
}

const UpdateBikeModal = ({ bike, onClose }: UpdateBikeModalProps) => {
  const [updateBike] = useUpdateBikeMutation();

  // Initializing form data with the bike's current data
  const [formData, setFormData] = useState({
    brand: bike.brand,
    model: bike.model,
    pricePerHour: Number(bike.pricePerHour),
    cc: bike.cc,
    year: bike.year,
    isAvailable: bike.isAvailable ? "available" : "unavailable",
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Update the form data based on the field
    setFormData({
      ...formData,
      [name]: name === "pricePerHour" || name === "cc" ? Number(value) : value,
    });
  };

  // Handle form field changes for availability specifically
  const handleAvailabilityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      isAvailable: value === "available" ? "available" : "unavailable", // Convert selection to string
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert string year and isAvailable (back to boolean)
    const updatedData = {
      ...formData,
      year: String(formData.year),
      isAvailable: formData.isAvailable === "available", // Convert string back to boolean
    };

    try {
      console.log(updatedData); // Check the data before submitting
      await updateBike({ id: bike._id, updateData: updatedData }).unwrap();
      toast.success("Bike updated successfully!");
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

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Brand */}
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

          {/* Model */}
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

          {/* Price per hour */}
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

          {/* CC */}
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

          {/* Year */}
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

          {/* Availability */}
          <div className="mb-4">
            <label
              htmlFor="isAvailable"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              id="isAvailable"
              name="isAvailable"
              value={formData.isAvailable}
              onChange={handleAvailabilityChange} // Separate handler for availability
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313]"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          {/* Submit Button */}
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
