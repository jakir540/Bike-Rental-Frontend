import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ManageBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);
  console.log("data form dashUs", data);

  // State for filters
  const [filter, setFilter] = useState({
    brand: "",
    model: "",
    isAvailable: "",
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
  console.log("form dash", { bikes });

  console.log(data.data);

  // Apply filter logic
  const filteredBikes = bikes.filter((bike) => {
    const matchesBrand = filter.brand
      ? bike.brand.includes(filter.brand)
      : true;
    const matchesModel = filter.model
      ? bike.model.includes(filter.model)
      : true;
    const matchesAvailability = filter.isAvailable
      ? bike.isAvailable === filter.isAvailable
      : true;
    return matchesBrand && matchesModel && matchesAvailability;
  });

  console.log({ filteredBikes });
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
              value={filter.isAvailable}
              onChange={(e) =>
                setFilter({ ...filter, isAvailable: e.target.value })
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
                Price
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Availability
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Actions
              </th>
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
              filteredBikes.map((bike) => (
                <tr key={bike.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <img
                      src={bike.image}
                      alt={bike.model}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-4 px-6">{bike.brand}</td>
                  <td className="py-4 px-6">{bike.model}</td>
                  <td className="py-4 px-6">${bike.price}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        bike.isAvailable === true
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {bike.isAvailable === true ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <NavLink to={`/bikes/${bike._id}`}>
                      <button className="bg-[#DE4313] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300">
                        View Details
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBikes;
