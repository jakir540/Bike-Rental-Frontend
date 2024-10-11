import bikeUser from "../../assets/bikeUser.jpg";
import React from "react";
import { Carousel } from "antd";
import jakirPhoto from "../../assets/Jakir.jpg";
import bikeOwner from "../../assets/bikeOwner.jpg";
import bikeOwner2 from "../../assets/bikeOwner2.jpg";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Testimonial = () => {
  return (
    <div className="bg-gradient-to-r from-[#1A1A2E] to-[#010313] text-white py-20 ">
      <h2 className="text-5xl text-center font-bold text-white mb-12">
        Testimonials
      </h2>
      <Carousel autoplay>
        <div style={contentStyle}>
          <div className="max-w-5xl mx-auto p-8 bg-white rounded shadow-lg text-center text-[#1A1A2E]">
            {/* <h2 className="text-4xl font-bold text-[#2A71D0] mb-8">TESTIMONIAL</h2> */}

            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                <img
                  src={jakirPhoto}
                  alt="Customer Photo"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-2 text-lg leading-relaxed">
              "An Italian brand renowned for its premium, high-performance
              motorcycles, especially in the sport and racing categories, with
              iconic designs and cutting-edge technology.An American brand
              synonymous with heavyweight cruisers "
            </p>
            <div className="my-3 text-[#2A71D0] font-semibold">
              Anisul Islam
            </div>
            <div className="text-[#2A71D0] font-semibold">ARON LOEB</div>
            <div className="my-2 text-gray-500">CEO, Company</div>
            <div className="flex justify-center mt-2">
              <span className="text-[#2A71D0]">★★★★★</span>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-[#2A71D0] hover:underline">
                www.reallygreatsite.com
              </a>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div className="max-w-5xl mx-auto p-8 bg-white rounded shadow-lg text-center text-[#1A1A2E]">
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                <img
                  src={bikeOwner}
                  alt="Customer Photo"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed">
              " A Japanese company known for its reliable and fuel-efficient
              motorcycles, Honda is one of the largest motorcycle manufacturers
              in the world, offering a wide range from sportbikes to commuters.
            </p>
            <div className=" text-[#2A71D0] font-semibold">HONDA</div>
            <div className="my-2 text-[#2A71D0] font-semibold">ARON LOEB</div>
            <div className="text-gray-500">CEO, Company</div>
            <div className="flex justify-center mt-2">
              <span className="text-[#2A71D0]">★★★★★</span>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-[#2A71D0] hover:underline">
                www.reallygreatsite.com
              </a>
            </div>
          </div>
        </div>

        <div style={contentStyle}>
          <div className="max-w-5xl mx-auto p-8 bg-white rounded shadow-lg text-center text-[#1A1A2E]">
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full p-1">
                <img
                  src={bikeOwner2}
                  alt="Customer Photo"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed">
              "Yamaha is a well-known Japanese company founded in 1887. It
              produces a wide range of products, including motorcycles, musical
              instruments, and electronics. Yamaha is famous for its reliable
              motorcycles and pianos"
            </p>
            <div className=" text-[#2A71D0] font-semibold">Yamaha</div>
            <div className="my-2 text-[#2A71D0] font-semibold">ARON LOEB</div>
            <div className="text-gray-500">CEO, Company</div>
            <div className="flex justify-center mt-2">
              <span className="text-[#2A71D0]">★★★★★</span>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-[#2A71D0] hover:underline">
                www.reallygreatsite.com
              </a>
            </div>
          </div>
        </div>

        <div style={contentStyle}>
          <div className="max-w-5xl mx-auto p-8 bg-white rounded shadow-lg text-center text-[#1A1A2E]">
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
              " A Japanese company known for its reliable and fuel-efficient
              motorcycles, Honda is one of the largest motorcycle manufacturers
              in the world, offering a wide range from sportbikes to commuters.
            </p>
            <div className=" text-[#2A71D0] font-semibold">HONDA</div>
            <div className="my-2 text-[#2A71D0] font-semibold">ARON LOEB</div>
            <div className="text-gray-500">CEO, Company</div>
            <div className="flex justify-center mt-2">
              <span className="text-[#2A71D0]">★★★★★</span>
            </div>
            <div className="mt-2 text-center">
              <a href="#" className="text-[#2A71D0] hover:underline">
                www.reallygreatsite.com
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
