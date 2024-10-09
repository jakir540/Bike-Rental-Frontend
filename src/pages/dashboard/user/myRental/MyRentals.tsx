import { useGetMyBookingQuery } from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";

const MyRentals = () => {
  const { data, isLoading } = useGetMyBookingQuery(undefined);

  const myRentals = data?.data;
  console.log({ data });

  const handlePayment = () => {
    console.log("Redirecting to the payment page...");
  };

  if (isLoading) {
    return <p>loading.......</p>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My Rentals
      </h2>

      <div className="space-y-6">
        {myRentals && myRentals.length > 0 ? (
          myRentals.map((rental: TRental) => (
            <div
              key={rental._id}
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 bg-white rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Bike ID:{" "}
                    <span className="text-orange-500">{rental.bikeId}</span>
                  </h3>
                  <p className="text-sm font-bold text-gray-600">
                    Start:{" "}
                    <span className="font-medium">
                      {new Date(rental.startTime).toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm font-bold text-gray-600">
                    Return:{" "}
                    <span className="font-medium">
                      {rental.returnTime
                        ? new Date(rental.returnTime).toLocaleString()
                        : "Not Returned Yet"}
                    </span>
                  </p>
                  <p className="mt-3 text-lg font-bold text-gray-800">
                    Total:
                    {rental.totalCost
                      ? ` $${rental.totalCost.toFixed(2)}`
                      : " Pending Calculation"}
                  </p>
                </div>

                {!rental.isPaid && (
                  <button
                    onClick={handlePayment}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
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

// https://i.ibb.co.com/CHB8cqG/bike-1.jpg
// https://i.ibb.co.com/Fh7p5mX/bike-2.jpg
// https://i.ibb.co.com/SnzyDVB/bike-3.webp
// https://i.ibb.co.com/B283xw2/bike-4.jpg
// https://i.ibb.co.com/Y8CMtD8/bike-5.jpg
// https://i.ibb.co.com/wcLDCrp/bike-6.jpg
