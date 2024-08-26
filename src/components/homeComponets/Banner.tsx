import { Carousel } from "antd";
import { motion } from "framer-motion";
import sliderImage2 from "@/assets/ball.jpeg";
import sliderImage1 from "@/assets/banner1.jpg";

// Motion variants for text box animation
const textBoxVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

// Motion variants for scaling and rotation animation
const rotateScaleVariants = {
  hidden: { scale: 1, rotate: 0, borderRadius: "20%" },
  visible: {
    scale: [1, 1.2, 1.2, 1, 1],
    rotate: [0, 0, 360, 360, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: { duration: 2 },
  },
};

export default function Banner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 rounded-lg">
      <Carousel autoplay className="w-full max-w-6xl">
        {/* Slide 1 */}
        <div className="relative">
          <img
            // src="https://i.ibb.co/9ykBsqP/shop-About.jpg"
            src={sliderImage1}
            alt="Shop About"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
          />
          {/* Top Text */}
          <motion.div
            className="absolute top-2 md:top-5 left-1/2 transform -translate-x-1/2 text-white text-base md:text-xl bg-black bg-opacity-50 px-2 md:px-4 py-1 md:py-2 rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          >
            Explore Our Vast Collection of Sports Gear
          </motion.div>
          {/* Center Text with Rotation and Scale */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg max-w-xs md:max-w-lg text-center"
            initial="hidden"
            animate="visible"
            variants={rotateScaleVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-4"
              variants={textBoxVariants}
            >
              Sale{" "}
              <span className="text-[#1E90FF] text-5xl md:text-7xl">50%</span>{" "}
              Discount
            </motion.h2>
            <motion.p className="text-sm md:text-lg" variants={textBoxVariants}>
              New Upcoming cricket bat
            </motion.p>
          </motion.div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={sliderImage2}
            alt="Ball"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
          />
          {/* Top Text */}
          <motion.div
            className="absolute top-2 md:top-5 left-1/2 transform -translate-x-1/2 text-white text-base md:text-xl bg-black bg-opacity-50 px-2 md:px-4 py-1 md:py-2 rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          >
            Premium Sports Balls for Every Game
          </motion.div>
          {/* Center Text with Rotation and Scale */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg max-w-xs md:max-w-lg text-center"
            initial="hidden"
            animate="visible"
            variants={rotateScaleVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-4"
              variants={textBoxVariants}
            >
              Football{" "}
              <span className="text-[#1E90FF] text-5xl md:text-7xl">30%</span>{" "}
              Discount
            </motion.h2>
            <motion.p className="text-sm md:text-lg" variants={textBoxVariants}>
              Top Quality Football
            </motion.p>
          </motion.div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="https://i.ibb.co/XFFdY6W/sports-5.jpg"
            alt="Sports"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
          />
          {/* Top Text */}
          <motion.div
            className="absolute top-2 md:top-5 left-1/2 transform -translate-x-1/2 text-white text-base md:text-xl bg-black bg-opacity-50 px-2 md:px-4 py-1 md:py-2 rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          >
            Join the Thriving Sports Community
          </motion.div>
          {/* Center Text with Rotation and Scale */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg max-w-xs md:max-w-lg text-center"
            initial="hidden"
            animate="visible"
            variants={rotateScaleVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-4"
              variants={textBoxVariants}
            >
              Sale{" "}
              <span className="text-[#1E90FF] text-5xl md:text-7xl">50%</span>{" "}
              Discount
            </motion.h2>
            <motion.p className="text-sm md:text-lg" variants={textBoxVariants}>
              New Upcoming Badminton bat
            </motion.p>
          </motion.div>
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            // src="https://i.ibb.co/zFCG6JW/banner-Bat.jpg"
            src="https://i.ibb.co/zFCG6JW/banner-Bat.jpg"
            alt="Banner Bat"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
          />
          {/* Top Text */}
          <motion.div
            className="absolute top-2 md:top-5 left-1/2 transform -translate-x-1/2 text-white text-base md:text-xl bg-black bg-opacity-50 px-2 md:px-4 py-1 md:py-2 rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          >
            Push Your Limits with High-Performance Gear
          </motion.div>
          {/* Center Text with Rotation and Scale */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 md:p-6 rounded-lg max-w-xs md:max-w-lg text-center"
            initial="hidden"
            animate="visible"
            variants={rotateScaleVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-4"
              variants={textBoxVariants}
            >
              Sale{" "}
              <span className="text-[#1E90FF] text-5xl md:text-7xl">80%</span>{" "}
              Discount
            </motion.h2>
            <motion.p className="text-sm md:text-lg" variants={textBoxVariants}>
              New Upcoming cricket products
            </motion.p>
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
}
