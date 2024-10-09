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
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4 text-[#DE4313]">Filter Bikes</h2>
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
              className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
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
              className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
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
              className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-[#DE4313] focus:ring-[#DE4313] sm:text-sm"
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
                Price/Hour
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
              <th className="py-3 px-6 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBikes.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-4 px-6 text-center text-gray-500">
                  No bikes found with the current filters.
                </td>
              </tr>
            ) : (
              filteredBikes.map((bike: TBike) => (
                <tr key={bike.id} className="hover:bg-gray-50">
                  <td className="py-3 px-6">
                    <img
                      src={bike.image} // Assuming you have an `image` field for the bike
                      alt={bike.model}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6">{bike.brand}</td>
                  <td className="py-3 px-6">{bike.model}</td>
                  <td className="py-3 px-6">${bike.pricePerHour}</td>
                  <td className="py-3 px-6">{bike.cc} CC</td>
                  <td className="py-3 px-6">{bike.year}</td>
                  <td className="py-3 px-6">
                    {bike.isAvailable === true ? (
                      <span className="text-green-600 font-semibold">
                        Available
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Unavailable
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-6">
                    <NavLink to={`/bikes/${bike._id}`}>
                      <button className="text-blue-600 hover:underline">
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
