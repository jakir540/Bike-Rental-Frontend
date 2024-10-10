import { useState } from "react";
import { NavLink } from "react-router-dom";
import UpdateBikeModal from "./UpdateBikeModal";
import { TBike } from "@/types";
import { useDeleteBikeMutation } from "@/redux/features/Bikes/Bikes";

const ManageBikeTable = ({ bike }: { bike: TBike }) => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteBike] = useDeleteBikeMutation();

  // Open modal and set selected bike data
  const handleUpdateClick = (bike: any) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  const HandleDelete = async (id: string) => {
    const isConfirmed = window.confirm("Are you sure want to delete this bike");
    if (isConfirmed) {
      try {
        await deleteBike(id);
      } catch (error) {
        console.log("bike could not deleted");
      }
    } else {
      console.log("bike deletion cancel");
    }
  };

  return (
    <>
      <tr key={bike.id} className="hover:bg-gray-50">
        <td className="py-4 px-6">
          <img
            src={bike?.image}
            alt={bike.model}
            className="w-16 h-16 object-cover rounded-lg"
          />
        </td>
        <td className="py-4 px-6">{bike.brand}</td>
        <td className="py-4 px-6">{bike.model}</td>
        <td className="py-4 px-6">${bike.pricePerHour}</td>
        <td className="py-4 px-6">{bike.cc}</td>
        <td className="py-4 px-6">{bike.year}</td>
        <td className="py-4 px-6">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              bike?.isAvailable === true
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {bike?.isAvailable === true ? "Available" : "Unavailable"}
          </span>
        </td>
        <td className="py-4 px-6">
          <NavLink to="">
            <button
              onClick={() => handleUpdateClick(bike)}
              className="bg-[#DE4313] text-white py-2 px-4 rounded-[10px] hover:bg-opacity-90 transition duration-300"
            >
              Update
            </button>
          </NavLink>
        </td>
        <td className="py-4 px-6">
          <NavLink to="">
            <button
              onClick={() => HandleDelete(bike._id)}
              className="bg-[#DE4313] text-white py-2 px-4 rounded-[10px] hover:bg-opacity-90 transition duration-300"
            >
              Delete
            </button>
          </NavLink>
        </td>
      </tr>

      {/* Modal */}
      {isModalOpen && (
        <UpdateBikeModal
          bike={selectedBike}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ManageBikeTable;
