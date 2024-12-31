import { useGetAllBookingsQuery } from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";

const PaymentPage = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const myRentals = data?.data;
  console.log("paid", myRentals);

  const handlePayment = (rental: TRental) => {
    console.log("Processing payment for:", rental);
    // Redirect to payment gateway logic here
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-lg text-blue-500 animate-pulse">
          Loading payments...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Payment Details
      </h1>

      <div className="w-full max-w-6xl mx-auto overflow-x-auto bg-white shadow-lg rounded-xl p-6">
        {myRentals && myRentals.length > 0 ? (
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Bike ID</th>
                <th className="px-6 py-4 text-left font-medium">Start Time</th>
                <th className="px-6 py-4 text-left font-medium">Return Time</th>
                <th className="px-6 py-4 text-left font-medium">Total Cost</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myRentals.map((rental: TRental, index: number) => (
                <tr
                  key={rental._id}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4">{rental.bikeId}</td>
                  <td className="px-6 py-4">
                    {new Date(rental.startTime).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {rental.returnTime
                      ? new Date(rental.returnTime).toLocaleString()
                      : "Not Returned Yet"}
                  </td>
                  <td className="px-6 py-4">
                    ${rental.totalCost?.toFixed(2) || "Pending"}
                  </td>
                  <td className="px-6 py-4">
                    {rental.isPaid ? (
                      <span className="bg-green-200 text-green-800 font-semibold px-3 py-1 rounded-full">
                        Paid
                      </span>
                    ) : (
                      <span className="bg-yellow-200 text-yellow-800 font-semibold px-3 py-1 rounded-full">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {!rental.isPaid && (
                      <button
                        onClick={() => handlePayment(rental)}
                        className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No rentals found for payment.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
