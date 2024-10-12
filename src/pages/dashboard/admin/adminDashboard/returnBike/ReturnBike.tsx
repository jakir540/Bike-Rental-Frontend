import Loading from "@/components/loadingPage/Loading";
import {
  useGetAllBookingsQuery,
  useReturnBikeMutation,
} from "@/redux/features/bookingBike/bookingBike";
import { TRental } from "@/types";
import { CheckCheck, CornerUpLeft } from "lucide-react";
import toast from "react-hot-toast";

const ReturnBike = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const [returnBike, { isLoading: returnBikeLoading }] =
    useReturnBikeMutation();

  const allRentals = data?.data || [];

  const handleReturn = async (rentalId: string) => {
    try {
      await returnBike(rentalId).unwrap();
      toast.success("Bike returned successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to return the bike.");
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  if (isLoading || returnBikeLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6 gap-3 text-orange-600 text-3xl font-semibold">
        <CornerUpLeft className="w-8 h-8" />
        <h2 className="tracking-wide">Return Bikes</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-[#DE4313] text-white">
            <tr>
              <th className="py-4 px-6 text-left">Bike ID</th>
              <th className="py-4 px-6 text-left">Start Time</th>
              <th className="py-4 px-6 text-left">Return Time</th>
              <th className="py-4 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {allRentals.length > 0 ? (
              allRentals.map((rental: TRental) => (
                <tr
                  key={rental._id}
                  className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="py-4 px-6">{rental.bikeId}</td>
                  <td className="py-4 px-6">{formatDate(rental.startTime)}</td>
                  <td className="py-4 px-6">
                    {rental.returnTime
                      ? formatDate(rental.returnTime)
                      : "Not Returned"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {rental.isReturned ? (
                      <CheckCheck className="text-green-600 inline-block" />
                    ) : (
                      <button
                        onClick={() => handleReturn(rental._id as string)}
                        disabled={returnBikeLoading}
                        className="bg-[#DE4313] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
                      >
                        Return Bike
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-xl font-semibold text-orange-600"
                >
                  No rentals available at the moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnBike;
