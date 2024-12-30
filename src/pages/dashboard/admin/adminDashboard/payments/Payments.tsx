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

      <div className="w-full max-w-5xl mx-auto overflow-x-auto">
        {myRentals && myRentals.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="px-4 py-3 text-left font-semibold">Bike ID</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Start Time
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Return Time
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Total Cost
                </th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {myRentals.map((rental: TRental, index: number) => (
                <tr
                  key={rental._id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3">{rental.bikeId}</td>
                  <td className="px-4 py-3">
                    {new Date(rental.startTime).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {rental.returnTime
                      ? new Date(rental.returnTime).toLocaleString()
                      : "Not Returned Yet"}
                  </td>
                  <td className="px-4 py-3">
                    ${rental.totalCost?.toFixed(2) || "Pending"}
                  </td>
                  <td className="px-4 py-3">
                    {rental.isPaid ? (
                      <span className="bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                        Paid
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 font-semibold px-2 py-1 rounded">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {!rental.isPaid && (
                      <button
                        onClick={() => handlePayment(rental)}
                        className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded shadow hover:bg-indigo-600 transition duration-300"
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
          <p className="text-center text-gray-500">
            No rentals found for payment.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
