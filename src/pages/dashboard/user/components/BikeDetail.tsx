/* eslint-disable @typescript-eslint/no-explicit-any */
import ConfirmBookingModal from "@/components/confirmBookingModal/ConfirmBookingModal";
import {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
} from "@/redux/features/Bikes/Bikes";
import { useCreateBikeBookingMutation } from "@/redux/features/bookingBike/bookingBike";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { FaCheckCircle, FaHeart } from "react-icons/fa";
import { TBike } from "@/types";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BikeDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetSingleBikeQuery(id);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createRental] = useCreateBikeBookingMutation();
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [backgroundSize, setBackgroundSize] = useState("cover");
  const [isLiked, setIsLiked] = useState(false);

  const { data: bikes } = useGetAllBikesQuery(undefined);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading bikes.</div>;

  const AllBikes = bikes?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-700">
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
  const isLoggedIn = true;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const xPos = ((e.pageX - left) / width) * 100;
    const yPos = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${xPos}% ${yPos}%`);
    setBackgroundSize("200%");
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("center");
    setBackgroundSize("cover");
  };

  const handleBookNow = async (startTime: any) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    try {
      setIsModalOpen(false);

      const bookingInfo = {
        bikeId: bike._id,
        startTime: startTime,
      };

      const result = await createRental(bookingInfo);
      if (result?.data?.data?.paymentSession?.payment_url) {
        toast.success("Pay 100 taka to confirm booking");
        window.location.href = result.data.data.paymentSession.payment_url;
        refetch();
      } else {
        toast.error("Bike is not available");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 lg:p-10">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg p-12 lg:rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className="lg:flex lg:space-x-12 space-y-8 lg:space-y-0 items-center">
          {/* Interactive Image Section */}
          <div
            className="relative w-full lg:w-1/2 h-[600px] overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${bike.image})`,
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
              transition:
                "background-size 0.3s ease, background-position 0.3s ease",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Product Details Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DE4313] to-[#FF6F61] mb-6">
                {bike.brand} {bike.model}
              </h2>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`text-2xl transition-all duration-300 ${
                  isLiked ? "text-red-500" : "text-gray-600"
                }`}
              >
                <FaHeart />
              </button>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-xl text-gray-800">
                Description:{" "}
              </span>
              {bike.description
                ? bike.description
                : "This is a high-performance bike, perfect for long rides and city commuting."}
            </p>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Price: </span>
                <span className="text-xl text-gray-800">
                  ${bike.pricePerHour}/hour
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold">Year: </span>
                <span>{bike.year}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold">Engine: </span>
                <span>{bike.cc}cc</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold">Availability: </span>
                <span
                  className={`${
                    bike.isAvailable ? "text-green-500" : "text-red-500"
                  } font-bold`}
                >
                  {bike.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* Booking Section */}
            {bike.isAvailable ? (
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </button>
                {/* <button
                  onClick={() => toast.info("Added to Wishlist")}
                  className="bg-gray-300 text-gray-700 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                >
                  Add to Wishlist
                </button> */}
              </div>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-500 font-bold py-4 px-10 rounded-xl shadow-lg transition duration-300 cursor-not-allowed"
              >
                Unavailable
              </button>
            )}
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold text-gray-800">
              Product Features
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span>Top-tier engine with 200cc capacity</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span>High-speed performance for long-distance rides</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span>Fuel-efficient, economical ride</span>
              </li>
            </ul>
          </div>

          {/* Reviews Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold text-gray-800">
              Customer Reviews
            </h3>
            <div className="space-y-2">
              <p className="text-lg text-gray-700">
                "Affordable and fast. Perfect for my weekend rides." - User 1
              </p>
              <p className="text-lg text-gray-700">
                "The engine performance is superb. Loved the experience." - User
                2
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-5xl font-extrabold text-center my-10 tracking-wider capitalize">
        Related Bikes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AllBikes?.filter(
          (ReletedBike: TBike) =>
            ReletedBike.brand === bike?.brand && ReletedBike._id !== bike._id
        )
          .slice(0, 8)
          .map((bike: TBike) => (
            <div
              key={bike._id}
              className="group bg-gradient-to-r from-[#29293A] to-[#3C3C4D] rounded-[20px] overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.05] hover:rotate-1 hover:shadow-2xl relative"
            >
              <div className="relative h-64 overflow-hidden rounded-t-[20px]">
                <img
                  src={bike?.image}
                  alt={bike.brand}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 bg-opacity-90 backdrop-blur-md bg-gradient-to-tr from-[#333] to-[#444] rounded-b-[20px]">
                <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#FF6F61]">
                  {bike.brand}
                </h3>
                <p className="text-lg text-gray-300">
                  {bike.name} • {bike.model}
                </p>
                <div className="flex justify-between mt-4 text-gray-300">
                  <p className="text-md">CC: {bike.cc}cc</p>
                  <p className="text-md font-semibold">
                    ${bike.pricePerHour}/hr
                  </p>
                </div>
                <NavLink
                  to={`/bikes/${bike._id}`}
                  className="mt-6 inline-flex items-center text-white bg-gradient-to-r from-[#FF6F61] to-[#FF3F34] px-5 py-2 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
                >
                  View Details
                  <FontAwesomeIcon icon={faCircleInfo} className="ml-2" />
                </NavLink>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ConfirmBookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleBookNow}
        />
      )}
    </div>
  );
};

export default BikeDetail;
