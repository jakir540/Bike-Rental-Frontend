import { useGetMyBookingQuery } from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";

const MyRentals = () => {
  const { data, isLoading } = useGetMyBookingQuery(undefined);
  const myRentals = data?.data;

  const handlePayment = () => {
    console.log("Redirecting to the payment page...");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 tracking-wide">
        My Rentals
      </h2>

      <div className="w-full max-w-4xl space-y-8">
        {myRentals && myRentals.length > 0 ? (
          myRentals.map((rental: TRental) => (
            <div
              key={rental._id}
              className="border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden bg-white"
            >
              <div className="p-6 rounded-lg bg-white flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Bike ID:{" "}
                    <span className="text-orange-600">{rental.bikeId}</span>
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Start:</span>{" "}
                      {new Date(rental.startTime).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold">Return:</span>{" "}
                      {rental.returnTime
                        ? new Date(rental.returnTime).toLocaleString()
                        : "Not Returned Yet"}
                    </p>
                  </div>
                  <p className="mt-4 text-lg font-bold text-gray-700">
                    Total:{" "}
                    <span className="text-green-500">
                      {rental.totalCost
                        ? ` $${rental.totalCost.toFixed(2)}`
                        : "Pending Calculation"}
                    </span>
                  </p>
                </div>

                {!rental.isPaid && (
                  <button
                    onClick={handlePayment}
                    className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-orange-400"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No rentals found.</p>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
