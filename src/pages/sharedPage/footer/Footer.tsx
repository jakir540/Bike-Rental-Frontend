import Lottie from "react-lottie";
import animationData from "../../../assets/footer.json";
import PrivacyPolicy from "./PrivacyPolicy";
import ContactUs from "./ContactUs";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative w-full h-auto ">
      {/* lotti Animation */}
      <div className="absolute bg-[#1A1A2E] inset-0 z-0 pt-30">
        <Lottie options={defaultOptions} />
      </div>

      {/* Footer Content */}
      <footer className="relative z-10 text-gray-500 body-font bg-[#1A1A2E] bg-opacity-80">
        <div className="container px-5 py-12 mx-auto">
          <div className="md:flex items-center justify-center md:text-left text-center lg:-mb-10 -mx-4">
            <FooterLinks />
            <PrivacyPolicy />
            <ContactUs />
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center justify-between">
            <div className="flex flex-col sm:flex-row md:flex-nowrap flex-wrap justify-center items-center md:justify-start w-full md:w-auto space-y-4 sm:space-y-0">
              <div className="relative sm:w-64 w-full sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Subscribe to our newsletter
                </label>
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded-full border border-gray-700 focus:ring-2 focus:ring-[#FF6F61] focus:bg-transparent focus:border-[#FF6F61] text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                Subscribe
              </button>
            </div>

            <span className="inline-flex justify-center md:justify-start mt-6 md:mt-0 w-full md:w-auto">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                <a key={icon} href="#" className="relative group ml-3">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg">
                    <svg
                      fill="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      {icon === "facebook" && (
                        <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                      )}
                      {icon === "twitter" && (
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      )}
                      {icon === "instagram" && (
                        <path d="M16 3c-1.1 0-2 .9-2 2v1h4V5c0-1.1-.9-2-2-2zM12 7a5 5 0 015 5v5a5 5 0 01-5 5H7a5 5 0 01-5-5V12a5 5 0 015-5h5m0-2H7a7 7 0 00-7 7v5a7 7 0 007 7h5a7 7 0 007-7V12a7 7 0 00-7-7zm0 4a3 3 0 100 6 3 3 0 000-6zm6.5-2A1.5 1.5 0 1017 8.5 1.5 1.5 0 0018.5 7z" />
                      )}
                      {icon === "linkedin" && (
                        <path d="M16 8a6 6 0 00-4 1.48V8H8v12h4v-6a2 2 0 012-2h2v-2h-2a6 6 0 00-6 6v6h4v-6h4V8zM4 8H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z" />
                      )}
                    </svg>
                  </div>
                </a>
              ))}
            </span>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 JackMart
              <a
                href="https://twitter.com/yourcompany"
                className="text-gray-500 ml-1 hover:text-[#FF6F61] transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                @bikerentalshop
              </a>
            </p>
            <span className="sm:ml-auto mt-2 sm:mt-0 w-full sm:w-auto text-gray-400 text-sm">
              Your go-to destination for premium bike rentals and accessories.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
