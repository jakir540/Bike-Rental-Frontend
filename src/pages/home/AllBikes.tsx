import { useGetAllBikesQuery } from "@/redux/features/getAllBikes/getAllBikes";
import { NavLink } from "react-router-dom";

const AllBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading bikes.</div>;

  const bikes = data?.data || [];

  return (
    <div className="bg-gradient-to-r from-[#1A1A2E] to-[#010313] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-wide">
          All Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="group bg-[#2C3E50] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={bike.image}
                  alt={bike.brand}
                  className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#DE4313]">
                  {bike.brand}
                </h3>
                <NavLink
                  to={`/bike/${bike.id}`}
                  className="inline-block text-white bg-gradient-to-r from-[#DE4313] to-[#FF6F61] px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
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
