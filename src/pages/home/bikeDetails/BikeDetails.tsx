import { useGetSingleBikeQuery } from "@/redux/features/Bikes/Bikes";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams(); // Get the bike ID from the URL
  console.log({ id });
  const { data, isLoading, isError } = useGetSingleBikeQuery(id);

  console.log("from bikedetails", data);
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading bike details...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-600">
        Error loading bike details.
      </div>
    );

  const bike = data?.data;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-[10px] shadow-lg max-w-4xl mx-auto">
        Bike Image
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-full md:w-1/2">
            <img
              src={bike?.image}
              // src="https://i.ibb.co.com/pdrqsqK/bike-1.jpg"
              alt={bike?.model}
              className="w-full h-full object-cover rounded-[10px] shadow-md"
            />
          </div>
          {/* Bike Information */}
          <div className="md:ml-8 mt-6 md:mt-0 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#DE4313] mb-4">
              {bike?.brand} {bike?.model}
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Price:{" "}
              <span className="text-[#DE4313]">${bike?.pricePerHour}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Availability:</strong>{" "}
              <span
                className={`font-medium px-2 py-1 rounded-[10px] ${
                  bike.availability === "available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {bike?.availability === "available"
                  ? "Available"
                  : "Unavailable"}
              </span>
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Description:</strong>{" "}
              {bike?.description || "No description available for this bike."}
            </p>
          </div>
        </div>
        {/* Additional Info and Actions */}
        <div className="mt-8 flex justify-between items-center">
          {/* Additional Features */}
          <div className="space-y-2">
            <p className="text-lg text-gray-700">
              <strong>Engine Capacity:</strong> {bike?.engineCapacity}cc
            </p>
            <p className="text-lg text-gray-700">
              <strong>Year:</strong> {bike?.year}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Mileage:</strong> {bike?.mileage} km
            </p>
          </div>

          {/* Back to Bikes Button */}
          <NavLink to="/dashboard/bikes">
            <button className="bg-[#DE4313] text-white py-3 px-6 rounded-[10px] hover:bg-opacity-90 transition duration-300 shadow-lg">
              Back to Bikes
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
