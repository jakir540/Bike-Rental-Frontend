import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex justify-between h-[450px] items-center bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] text-white py-10 px-8">
      {/* Bike Image with Framer Motion */}
      <motion.div
        className="left-0"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 1, x: 0 }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          x: isHovered ? 50 : 0,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <motion.img
          src="https://i.ibb.co.com/Tw2cgJD/bikesss.png"
          alt="Motorcycle"
          className="w-[700px] lg:w-[900px] mt-[-120px]"
          animate={{
            x: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3, // Speed of the running motion
          }}
        />
      </motion.div>

      {/* Subscription Form */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full max-w-6xl space-y-4 lg:space-y-0 lg:space-x-4 z-10">
        <h3 className="text-white text-2xl font-bold mb-4 lg:mb-0 lg:text-3xl tracking-widest">
          Subscribe to Our Newsletter
        </h3>

        <div className="flex w-full max-w-lg relative group z-10">
          {/* Ensure the input type is email if that's the intent */}
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-l-[8px] focus:outline-none focus:ring-2 focus:ring-pink-500 group-hover:ring-2 group-hover:ring-blue-400 transition-all duration-300 ease-in-out"
          />
          {/* Submit Button */}
          <button className="bg-[#FF6F61] text-white px-6 py-3 rounded-r-[8px] hover:bg-[#1A1A2E] transition duration-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send
          </button>
        </div>
      </div>

      {/* Animation Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bg-gradient-to-r from-transparent via-[#FF6F61] to-transparent opacity-30 w-[500px] h-[500px] rounded-full top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Newsletter;
