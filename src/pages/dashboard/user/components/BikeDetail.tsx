import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { useParams, useNavigate } from "react-router-dom";

const BikeDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetAllBikesQuery(id);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-600">
        Error loading bike details.
      </div>
    );

  const bike = data?.data;

  // Mocking an isLoggedIn status for now, use actual logic in real implementation
  const isLoggedIn = true;

  const handleBookNow = () => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      // Redirect to booking process
      navigate(`/booking/${bike.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <img
            src={bike.image}
            alt={bike.model}
            className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow-md mb-6 md:mb-0 transition duration-500 hover:shadow-xl"
          />
          {/* Bike Details Section */}
          <div className="md:ml-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#DE4313] mb-4">
              {bike.brand} {bike.model}
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              Price:{" "}
              <span className="text-gray-800 font-semibold">
                ${bike.pricePerHour}/hour
              </span>
            </p>
            <p className="text-gray-600 text-lg font-medium">
              Year:{" "}
              <span className="text-gray-800 font-semibold">{bike.year}</span>
            </p>
            <p className="text-gray-600 text-lg font-medium">
              CC: <span className="text-gray-800 font-semibold">{bike.cc}</span>
            </p>
            <p className="text-gray-600 text-lg font-medium">
              Availability:{" "}
              <span
                className={`${
                  bike.availability === "available"
                    ? "text-green-500"
                    : "text-red-500"
                } font-semibold`}
              >
                {bike.availability === "available"
                  ? "Available"
                  : "Unavailable"}
              </span>
            </p>

            {/* Book Now Button */}

            <button
              onClick={handleBookNow}
              // className={`mt-8 py-3 px-8 rounded-full text-white font-semibold text-lg shadow-md transform hover:scale-105 transition duration-300 ${
              //   bike.availability === "available"
              //     ? "bg-gradient-to-r from-[#DE4313] to-[#FF6F61] hover:to-[#ff4c3b]"
              //     : "bg-gray-400 cursor-not-allowed"
              // }`}
              // disabled={bike.availability !== "available"}
            >
              Book Now
              {/* {bike.availability === "available" ? "Book Now" : "Not Available"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
