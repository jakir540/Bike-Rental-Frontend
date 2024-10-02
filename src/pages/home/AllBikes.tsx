import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { NavLink } from "react-router-dom";
import { TBike } from "@/types";

const AllBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading bikes.</div>;

  const bikes = data?.data || [];

  return (
    <div className="bg-gradient-to-r from-[#1A1A2E] to-[#010313] py-14">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-14 tracking-wider">
          Latest Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bikes?.slice(0, 8).map((bike: TBike) => (
            <div
              key={bike.id}
              className="group bg-[#2C3E50] rounded-[10px] overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={bike?.image}
                  alt={bike.brand}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-[#FF6F61]">
                  {bike.brand}
                </h3>
                <p className="text-lg text-gray-400 mb-6">{bike.model}</p>
                <NavLink
                  to={`/bikes/${bike._id}`}
                  className="inline-block text-white bg-gradient-to-r from-[#FF6F61] to-[#DE4313] px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBikes;
// https://i.ibb.co.com/pdrqsqK/bike-1.jpg
// https://i.ibb.co.com/cr4bP6K/bike-2.jpg
// https://i.ibb.co.com/VWZvqmg/bike-3.jpg
