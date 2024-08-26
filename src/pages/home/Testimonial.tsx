import bikeUser from "../../assets/bikeUser.jpg";
import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Testimonial = () => {
  return (
    <div className="bg-[#010313] text-white py-20 ">
      <Carousel autoplay>
        <div style={contentStyle}>
          <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center text-[#1A1A2E]">
            {/* <h2 className="text-4xl font-bold text-[#2A71D0] mb-8">TESTIMONIAL</h2> */}

            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                <img
                  src={bikeUser}
                  alt="Customer Photo"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div className="mt-6 text-[#2A71D0] font-semibold">ARON LOEB</div>
            <div className="text-gray-500">CEO, Company</div>
            <div className="flex justify-center mt-4">
              <span className="text-[#2A71D0]">★★★★★</span>
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-[#2A71D0] hover:underline">
                www.reallygreatsite.com
              </a>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center text-[#1A1A2E]">
              {/* <h2 className="text-4xl font-bold text-[#2A71D0] mb-8">TESTIMONIAL</h2> */}

              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                  <img
                    src={bikeUser}
                    alt="Customer Photo"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="mt-6 text-[#2A71D0] font-semibold">ARON LOEB</div>
              <div className="text-gray-500">CEO, Company</div>
              <div className="flex justify-center mt-4">
                <span className="text-[#2A71D0]">★★★★★</span>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-[#2A71D0] hover:underline">
                  www.reallygreatsite.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center text-[#1A1A2E]">
              {/* <h2 className="text-4xl font-bold text-[#2A71D0] mb-8">TESTIMONIAL</h2> */}

              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                  <img
                    src={bikeUser}
                    alt="Customer Photo"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="mt-6 text-[#2A71D0] font-semibold">ARON LOEB</div>
              <div className="text-gray-500">CEO, Company</div>
              <div className="flex justify-center mt-4">
                <span className="text-[#2A71D0]">★★★★★</span>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-[#2A71D0] hover:underline">
                  www.reallygreatsite.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center text-[#1A1A2E]">
              {/* <h2 className="text-4xl font-bold text-[#2A71D0] mb-8">TESTIMONIAL</h2> */}

              <div className="flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                  <img
                    src={bikeUser}
                    alt="Customer Photo"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="mt-6 text-[#2A71D0] font-semibold">ARON LOEB</div>
              <div className="text-gray-500">CEO, Company</div>
              <div className="flex justify-center mt-4">
                <span className="text-[#2A71D0]">★★★★★</span>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-[#2A71D0] hover:underline">
                  www.reallygreatsite.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
