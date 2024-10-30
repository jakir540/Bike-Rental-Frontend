import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { useState } from "react";
import { TBike } from "@/types";
import { NavLink } from "react-router-dom";

const BikeListing = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);

  // State for filters
  const [filter, setFilter] = useState({
    brand: "",
    model: "",
    availability: "",
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-semibold text-gray-700">
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

  // Filter logic
  const filteredBikes = bikes.filter((bike: TBike) => {
    const matchesBrand = filter.brand
      ? bike.brand.toLowerCase().includes(filter.brand.toLowerCase())
      : true;

    const matchesModel = filter.model
      ? bike.model.toLowerCase().includes(filter.model.toLowerCase())
      : true;

    const matchesAvailability = filter.availability
      ? filter.availability === "available"
        ? bike.isAvailable === true
        : bike.isAvailable === false
      : true;

    return matchesBrand && matchesModel && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-[8px] shadow-lg mb-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#DE4313] tracking-wider">
          Filter Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Filter */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-semibold text-gray-700"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              placeholder="e.g., Yamaha"
              value={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
              className="mt-2 block p-3 w-full rounded-[8px] border border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            />
          </div>

          {/* Model Filter */}
          <div>
            <label
              htmlFor="model"
              className="block text-sm font-semibold text-gray-700"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              placeholder="e.g., MT-15"
              value={filter.model}
              onChange={(e) => setFilter({ ...filter, model: e.target.value })}
              className="mt-2 block p-3 w-full rounded-[8px] border border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            />
          </div>

          {/* Availability Filter */}
          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-semibold text-gray-700"
            >
              Availability
            </label>
            <select
              id="availability"
              value={filter.availability}
              onChange={(e) =>
                setFilter({ ...filter, availability: e.target.value })
              }
              className="mt-2 block p-3 w-full rounded-[8px] border border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
            >
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bikes Table */}
      <div className="bg-white rounded-[8px] shadow-lg overflow-hidden max-w-6xl mx-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white">
            <tr>
              <th className="py-4 px-6 text-sm font-semibold">Image</th>
              <th className="py-4 px-6 text-sm font-semibold">Brand</th>
              <th className="py-4 px-6 text-sm font-semibold">Model</th>
              <th className="py-4 px-6 text-sm font-semibold">Price/Hour</th>
              <th className="py-4 px-6 text-sm font-semibold">CC</th>
              <th className="py-4 px-6 text-sm font-semibold">Year</th>
              <th className="py-4 px-6 text-sm font-semibold">Availability</th>
              <th className="py-4 px-6 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBikes.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-6 text-center text-gray-500">
                  No bikes found with the current filters.
                </td>
              </tr>
            ) : (
              filteredBikes.map((bike: TBike) => (
                <tr
                  key={bike.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-4 px-6">
                    <img
                      src={bike.image}
                      alt={bike.model}
                      className="h-14 w-14 object-cover rounded-[8px]"
                    />
                  </td>
                  <td className="py-4 px-6">{bike.brand}</td>
                  <td className="py-4 px-6">{bike.model}</td>
                  <td className="py-4 px-6 text-green-500 font-semibold">
                    ${bike.pricePerHour}
                  </td>
                  <td className="py-4 px-6">{bike.cc} CC</td>
                  <td className="py-4 px-6">{bike.year}</td>
                  <td className="py-4 px-6">
                    {bike.isAvailable ? (
                      <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                        Available
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                        Unavailable
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <NavLink to={`/bikes/${bike._id}`}>
                      <button className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-2 px-6 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
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

export default BikeListing;
