import aboutUs from "../../assets/man-choosed-motorcycle.jpg";
import ContactSection from "./ContactSection";
import aboutUs1 from "../../assets/bikeUser.jpg";
import aboutUs2 from "../../assets/happy-man.jpg";
import aboutUs3 from "../../assets/Jakir.jpg";

const AboutUs = () => {
  return (
    <div className="text-white min-h-screen bg-[#010313]">
      <section className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div
          className="relative text-center mb-16 px-6 md:px-12 py-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutUs})` }} // Add the path to your background image here
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>{" "}
          {/* Semi-transparent overlay */}
          <h1 className="relative text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DE4313] to-[#FF65A1] tracking-wide mb-8">
            About Us
          </h1>
          <div className="relative group overflow-hidden rounded-2xl shadow-xl mb-8 w-full max-w-3xl mx-auto">
            <img
              className="rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
              src={aboutUs} // Add the path to your image
              alt="About Us"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
          <p className="relative text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto tracking-wide">
            Explore our organization, understand our mission, meet our team, and
            learn about our exciting journey.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-semibold mb-4 text-[#DE4313]">
              Our Mission
            </h2>
            <div className="w-1/2 h-1 bg-gradient-to-r from-[#DE4313] to-yellow-400 rounded-full"></div>
          </div>
          <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Our platform is dedicated to providing an exceptional bike rental
            experience. We believe in promoting sustainable transportation and
            making cycling accessible to everyone. Our core values are
            commitment to quality, customer satisfaction, and environmental
            responsibility.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-[#DE4313]">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Example Team Member */}

            <div className="p-4 w-full md:w-1/3 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-white rounded-[8px] shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={aboutUs1}
                  alt="Team Member"
                  className="w-24 h-24 p-1 rounded-full mx-auto mb-4 border-4 bg-gradient-to-r from-[#DE4313] to-pink-500"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Mizanur Rahman
                </h3>
                <p className="text-[#DE4313]">Founder</p>
                <p className="text-gray-700 mt-2">
                  Jane is the visionary behind our platform, with over a decade
                  of experience in the cycling industry. She is passionate about
                  sustainability and innovation.
                </p>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/3 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-white rounded-[8px] shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={aboutUs3}
                  alt="Team Member"
                  className="w-24 h-24 p-1 rounded-full mx-auto mb-4 border-4 bg-gradient-to-r from-[#DE4313] to-pink-500"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Md Jakir Hossain
                </h3>
                <p className="text-[#DE4313]">Founder & CEO</p>
                <p className="text-gray-700 mt-2">
                  Jane is the visionary behind our platform, with over a decade
                  of experience in the cycling industry. She is passionate about
                  sustainability and innovation.
                </p>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/3 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-white rounded-[8px] shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={aboutUs2}
                  alt="Team Member"
                  className="w-24 h-24 p-1 rounded-full mx-auto mb-4 border-4 bg-gradient-to-r from-[#DE4313] to-pink-500"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Anisul Islam
                </h3>
                <p className="text-[#DE4313]">CEO</p>
                <p className="text-gray-700 mt-2">
                  Jane is the visionary behind our platform, with over a decade
                  of experience in the cycling industry. She is passionate about
                  sustainability and innovation.
                </p>
              </div>
            </div>

            {/* Repeat for additional team members */}
          </div>
        </section>

        {/* History & Milestones */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-[#DE4313]">
            Our History & Milestones
          </h2>
          <div className="relative">
            <div className="border-l-2 border-[#DE4313] pl-6 ml-4">
              <div className="mb-8 relative">
                <h3 className="text-xl font-semibold mb-2 text-[#DE4313]">
                  2021 - Platform Launch
                </h3>
                <p className="text-gray-300">
                  We officially launched our bike rental platform, aiming to
                  provide a user-friendly and eco-conscious solution for urban
                  transportation.
                </p>
                <div className="absolute -left-7 top-2 w-4 h-4 bg-[#DE4313] rounded-full"></div>
              </div>
              <div className="mb-8 relative">
                <h3 className="text-xl font-semibold mb-2 text-[#DE4313]">
                  2022 - Expansion
                </h3>
                <p className="text-gray-300">
                  Our services expanded to new cities, reaching more customers
                  and enhancing our network of bike stations.
                </p>
                <div className="absolute -left-7 top-2 w-4 h-4 bg-[#DE4313] rounded-full"></div>
              </div>
              {/* Add more milestones as needed */}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <ContactSection />
      </section>
    </div>
  );
};

export default AboutUs;
