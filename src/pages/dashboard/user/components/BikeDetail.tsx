/* eslint-disable @typescript-eslint/no-explicit-any */
import ConfirmBookingModal from "@/components/confirmBookingModal/ConfirmBookingModal";
import { useGetSingleBikeQuery } from "@/redux/features/Bikes/Bikes";
import { useCreateBikeBookingMutation } from "@/redux/features/bookingBike/bookingBike";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const BikeDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useGetSingleBikeQuery(id);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createRental] = useCreateBikeBookingMutation();
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [backgroundSize, setBackgroundSize] = useState("cover"); // Start with normal image size

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 lg:p-10">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg p-10 lg:rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="lg:flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Zoomable Image Section */}
          <div
            className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-2xl shadow-xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${bike.image})`,
              backgroundSize: backgroundSize,
              backgroundPosition: backgroundPosition,
            }}
          ></div>

          {/* Bike Details Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DE4313] to-[#FF6F61] mb-6">
              {bike.brand} {bike.model}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-xl text-gray-800">
                Description:{" "}
              </span>
              {bike.description
                ? bike.description
                : "This is a high-performance bike, perfect for long rides and city commuting."}
            </p>
            <div className="text-xl text-gray-700">
              <p className="mb-3">
                <span className="font-semibold">Price: </span>$
                {bike.pricePerHour}/hour
              </p>
              <p className="mb-3">
                <span className="font-semibold">Year: </span>
                {bike.year}
              </p>
              <p className="mb-3">
                <span className="font-semibold">Engine: </span>
                {bike.cc}cc
              </p>
              <p className="mb-5">
                <span className="font-semibold">Availability: </span>
                <span
                  className={`${
                    bike.isAvailable ? "text-green-500" : "text-red-500"
                  } font-bold`}
                >
                  {bike.isAvailable ? "Available" : "Unavailable"}
                </span>
              </p>
            </div>

            {/* Book Now Button */}
            {bike.isAvailable ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 duration-300"
              >
                Book Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-500 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-not-allowed"
              >
                Unavailable
              </button>
            )}
          </div>
        </div>
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
