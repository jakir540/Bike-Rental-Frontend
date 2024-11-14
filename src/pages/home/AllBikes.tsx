import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { NavLink } from "react-router-dom";
import { TBike } from "@/types";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllBikes = () => {
  const { data, isLoading, isError } = useGetAllBikesQuery(undefined);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading bikes.</div>;

  const bikes = data?.data || [];

  return (
    <div className="bg-gradient-to-r from-[#1A1A2E] to-[#010313] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-14 tracking-wider">
          Latest Bikes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {bikes.slice(0, 8).map((bike: TBike) => (
            <div
              key={bike.id}
              className="group bg-gradient-to-r from-[#29293A] to-[#3C3C4D] rounded-[20px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
            >
              <div className="relative h-64 overflow-hidden rounded-t-[20px]">
                <img
                  src={bike.image}
                  alt={bike.brand}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6 bg-opacity-90 backdrop-blur-md bg-gradient-to-tr from-[#333] to-[#444] rounded-b-[20px]">
                <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#FF6F61]">
                  {bike.brand}
                </h3>
                <p className="text-lg text-gray-300">
                  {bike.name} • {bike.model}
                </p>
                <div className="flex justify-between mt-4 text-gray-300">
                  <p className="text-md">CC: {bike.cc}cc</p>
                  <p className="text-md font-semibold">
                    ${bike.pricePerHour}/hr
                  </p>
                </div>
                <NavLink
                  to={`/bikes/${bike._id}`}
                  className="mt-6 inline-flex items-center text-white bg-gradient-to-r from-[#FF6F61] to-[#FF3F34] px-5 py-2 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
                >
                  View Details
                  <FontAwesomeIcon icon={faCircleInfo} className="ml-2" />
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
