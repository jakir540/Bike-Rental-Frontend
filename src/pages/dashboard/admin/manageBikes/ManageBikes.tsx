import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ManageBikeTable from "./ManageBikeTable";
import { TBike } from "@/types";

const ManageBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);

  // State for filters
  const [filter, setFilter] = useState({
    brand: "",
    model: "",
    availability: "",
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-600">
        Error loading bikes.
      </div>
    );

  const bikes = data?.data || [];

  console.log(data.data);

  // Apply filter logic
  const filteredBikes = bikes.filter((bike: TBike) => {
    const matchesBrand = filter.brand
      ? bike.brand.includes(filter.brand)
      : true;
    const matchesModel = filter.model
      ? bike.model.includes(filter.model)
      : true;
    const matchesAvailability = filter.availability
      ? bike?.availability === filter.availability
      : true;
    return matchesBrand && matchesModel && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#DE4313]">
          Filter Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Brand Filter */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              placeholder="e.g., Yamaha"
              value={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            />
          </div>

          {/* Model Filter */}
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              placeholder="e.g., MT-15"
              value={filter.model}
              onChange={(e) => setFilter({ ...filter, model: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            />
          </div>

          {/* Availability Filter */}
          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              id="availability"
              value={filter.availability}
              onChange={(e) =>
                setFilter({ ...filter, availability: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            >
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bikes Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Image
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Brand
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Model
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                pricePerHour
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                CC
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Year
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Availability
              </th>
              <th className="ms-5 py-3 px-6 text-sm font-semibold text-gray-700">
                Actions
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {filteredBikes.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-4 px-6 text-center text-gray-500">
                  No bikes match the current filter.
                </td>
              </tr>
            ) : (
              filteredBikes.map((bike: TBike) => (
                <ManageBikeTable key={bike.id} bike={bike} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBikes;
