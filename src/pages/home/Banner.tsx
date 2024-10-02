import bikeVideo from "../../assets/video_bike.mp4";

const Banner = () => {
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
        <p className="text-xl md:text-2xl mb-8">
          Check bike availability in your area
        </p>
        <button className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400">
          Search Bikes
        </button>
      </div>
    </div>
  );
};

export default Banner;
