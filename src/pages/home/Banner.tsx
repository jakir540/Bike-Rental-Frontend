import { FormEvent, useState } from "react";
import bikeVideo from "../../assets/video_bike.mp4";
import { useGetAllBikesQuery } from "@/redux/features/Bikes/Bikes";
import { TBike } from "@/types";
import toast from "react-hot-toast";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  const { data } = useGetAllBikesQuery(undefined);
  const bikes = data?.data || [];

  // State for filters
  const [filter, setFilter] = useState({
    brand: "",
  });

  // Handle search on form submission
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const matches = bikes.filter((bike: TBike) => {
      const matchesBrand = filter.brand
        ? bike.brand.toLowerCase().includes(filter.brand.toLowerCase())
        : true;

      return matchesBrand;
    });

    if (matches.length > 0) {
      toast.success("Bike is available! in our store 🚴‍♂️");
      setFilter({ brand: "" });
    } else {
      toast.error("No bike found! 😞");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bikeVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
          <span className="text-[#DE4313] text-[90px] animate-pulse">F</span>ind
          Your Perfect{" "}
          <span className="text-[#DE4313] text-[90px] animate-pulse">R</span>
          ide
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="lg:w-full max-w-md">
          <div className="flex items-center border-b-2 border-[#DE4313] py-2">
            <input
              type="text"
              placeholder="Enter the Bike Brand Name"
              value={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
              className="bg-transparent border-none text-white placeholder-white focus:outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-[#DE4313] text-white px-4 py-2 rounded hover:bg-[#FF6F61] transition duration-300"
            >
              Search
              <FontAwesomeIcon icon={faMagnifyingGlass} className="px-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
