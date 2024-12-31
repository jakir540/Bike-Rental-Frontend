import {
  useDeleteBookingMutation,
  useGetMyBookingQuery,
} from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";

const MyRentals = () => {
  const { data: bookingsData, isLoading: isFetching } =
    useGetMyBookingQuery(undefined);
  const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
  const myRentals = bookingsData?.data;

  //cancel booking
  const handleCancelRental = async (rentalId: string | undefined) => {
    if (!rentalId) {
      console.error("Rental ID is undefined");
      return;
    }

    try {
      await deleteBooking(rentalId).unwrap();
      console.log(`Rental with ID ${rentalId} deleted successfully.`);
    } catch (error) {
      console.error("Failed to delete rental:", error);
    }
  };

  if (isFetching || isDeleting) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
        My Rentals
      </h2>

      <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-xl">
        {myRentals && myRentals.length > 0 ? (
          <table className="w-full text-left border-collapse bg-gradient-to-br from-white to-gray-50">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr className="text-sm font-medium uppercase">
                <th className="px-8 py-4">Bike ID</th>
                <th className="px-8 py-4">Start Time</th>
                <th className="px-8 py-4">Return Time</th>
                <th className="px-8 py-4">Total Cost</th>
                <th className="px-8 py-4">Payment Status</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myRentals.map((rental: TRental, index: number) => (
                <tr
                  key={rental._id}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-200 transition"
                      : "bg-white hover:bg-gray-100 transition"
                  }
                >
                  <td className="px-8 py-6 text-indigo-600 font-medium text-lg">
                    {rental.bikeId}
                  </td>
                  <td className="px-8 py-6 text-gray-700">
                    {new Date(rental.startTime).toLocaleString()}
                  </td>
                  <td className="px-8 py-6 text-gray-700">
                    {rental.returnTime ? (
                      new Date(rental.returnTime).toLocaleString()
                    ) : (
                      <span className="italic text-gray-500">Not Returned</span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-green-600 font-semibold">
                    {rental.totalCost ? (
                      `$${rental.totalCost.toFixed(2)}`
                    ) : (
                      <span className="text-gray-500">Pending Calculation</span>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    {rental.isPaid ? (
                      <span className="text-green-500 font-bold">Paid</span>
                    ) : (
                      <span className="text-red-500 font-bold">Unpaid</span>
                    )}
                  </td>
                  <td className="px-8 py-6">
                    <button
                      onClick={() => handleCancelRental(rental._id)}
                      className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-red-400"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 font-medium text-lg">
            No rentals found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
