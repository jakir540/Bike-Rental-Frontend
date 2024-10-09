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

  const handleBookNow = async (startTime: string) => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    try {
      setIsModalOpen(false); // Close modal before handling the booking

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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-10">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-[8px] shadow-3xl">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <img
            src={bike.image}
            alt={bike.model}
            className="w-full md:w-1/2 h-96 object-cover rounded-[8px] shadow-xl transform hover:scale-110 transition duration-500"
          />

          {/* Bike Details Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-[#DE4313] mb-6">
              {bike.brand} {bike.model}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold text-xl text-gray-800">
                Description:{" "}
              </span>
              {bike.description
                ? bike.description
                : "This is a high-performance bike, perfect for long rides and city commuting."}
            </p>
            <p className="text-xl text-gray-700 mb-3">
              <span className="font-semibold">Price: </span>${" "}
              {bike.pricePerHour}
              /hour
            </p>
            <p className="text-xl text-gray-700 mb-3">
              <span className="font-semibold">Year: </span>
              {bike.year}
            </p>
            <p className="text-xl text-gray-700 mb-3">
              <span className="font-semibold">Engine: </span>
              {bike.cc}cc
            </p>
            <p className="text-xl text-gray-700 mb-5">
              <span className="font-semibold">Availability: </span>
              <span
                className={`${
                  bike.isAvailable ? "text-green-600" : "text-red-600"
                } font-bold`}
              >
                {bike.isAvailable ? "Available" : "Unavailable"}
              </span>
            </p>

            {/* Book Now Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-bold py-3 px-6 rounded-[8px] shadow-lg hover:shadow-2xl transition transform hover:scale-110 duration-300"
            >
              Book Now
            </button>
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
