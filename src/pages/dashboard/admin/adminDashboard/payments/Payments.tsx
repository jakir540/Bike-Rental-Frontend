import { useGetAllBookingsQuery } from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";

const PaymentPage = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const myRentals = data?.data;

  const handlePayment = (rental: TRental) => {
    console.log("Processing payment for:", rental);
    // Redirect to payment gateway logic here
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-blue-500 animate-pulse">
          Loading payments...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Payment Details
      </h1>

      <div className="w-full max-w-5xl mx-auto space-y-8">
        {myRentals && myRentals.length > 0 ? (
          myRentals.map((rental: TRental) => (
            <div
              key={rental._id}
              className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Bike ID:{" "}
                    <span className="text-indigo-600">{rental.bikeId}</span>
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
                    Total Cost:{" "}
                    <span className="text-green-600">
                      ${rental.totalCost?.toFixed(2) || "Pending"}
                    </span>
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  {rental.isPaid ? (
                    <span className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg shadow-md">
                      Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(rental)}
                      className="bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-indigo-400"
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>

              {!rental.isPaid && (
                <div className="bg-gray-50 px-6 py-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-2">
                    Payment Details
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Payment Method:</span>{" "}
                      Credit Card, Debit Card, UPI
                    </p>
                    <p>
                      <span className="font-semibold">Transaction Fee:</span>{" "}
                      $2.50
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No rentals found for payment.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
