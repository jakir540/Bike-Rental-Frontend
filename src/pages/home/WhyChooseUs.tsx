const WhyChooseUs = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313]">
      {/* animated gradient  */}
      <div className="absolute inset-0 overflow-hidden">J</div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-6xl font-extrabold text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative p-8 bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 p-5 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0 4v6m-6-3c0 3.313 2.686 6 6 6s6-2.687 6-6H6z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Best Prices
            </h3>
            <p className="text-gray-600">
              We offer the most competitive prices in the market, ensuring you
              get the best value for your money.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-500 group-hover:h-2"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-teal-400 p-5 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7v10M12 7v10m-7 4h14c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2H5c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              Choose from a vast range of bikes that cater to every need and
              preference, from casual riders to professionals.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 to-teal-400 transition-all duration-500 group-hover:h-2"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-5 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm10-1v4c0 2.213-.895 4-2 4s-2-1.787-2-4v-2.586l-4-4V6c0-2.213-1.787-4-4-4S6 3.787 6 6v3.414l-4 4V14c0 2.213-.895 4-2 4s-2-1.787-2-4v-4c0-2.213.895-4 2-4s2 1.787 2 4v2.586l4-4V6c0-2.213 1.787-4 4-4s4 1.787 4 4v3.414l4 4V14c0 2.213.895 4 2 4s2-1.787 2-4v-4c0-2.213-.895-4-2-4s-2 1.787-2 4z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Excellent Customer Service
            </h3>
            <p className="text-gray-600">
              Our dedicated team is here to help you every step of the way,
              ensuring a seamless and enjoyable experience.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-500 group-hover:h-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
