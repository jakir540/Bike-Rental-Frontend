import bikeUser from "../../assets/bikeUser.jpg";

import { Carousel } from "antd";
import jakirPhoto from "../../assets/Jakir.jpg";
import bikeOwner from "../../assets/bikeOwner.jpg";
import bikeOwner2 from "../../assets/bikeOwner2.jpg";

const Testimonial = () => {
  return (
    <div className="fade-in bg-gradient-to-r from-[#1A1A2E] to-[#010313] text-white py-16">
      <h2 className="text-5xl text-center font-bold text-white mb-14 tracking-wider">
        Testimonials
      </h2>
      <Carousel autoplay>
        {[jakirPhoto, bikeOwner, bikeOwner2, bikeUser].map((photo, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-[8px] shadow-2xl text-center text-white">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1 shadow-md">
                  <img
                    src={photo}
                    alt="Customer"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-lg leading-relaxed italic text-gray-200">
                "A renowned motorcycle brand that is globally recognized for
                innovation, performance, and reliability. It continues to set
                the standard for quality in the industry."
              </p>
              <div className="mt-6 font-semibold text-xl">Anisul Islam</div>
              <div className="text-lg text-[#FF6F61] font-semibold">
                CEO, ARON LOEB
              </div>
              <div className="mt-2 text-gray-400 text-sm">Company</div>
              <div className="flex justify-center mt-4">
                <span className="text-[#FF6F61] text-lg">★★★★★</span>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-[#FF6F61] hover:text-[#FF3F34] underline font-medium transition duration-300"
                >
                  www.reallygreatsite.com
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
