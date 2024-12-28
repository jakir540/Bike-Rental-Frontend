import { FiChevronDown } from "react-icons/fi";

const FaqSection = () => {
  return (
    <div className="fade-in min-h-screen bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] text-white py-10">
      {/* Header Section */}
      <div className="text-center mb-20 space-y-8">
        <h1 className="text-5xl md:text-5xl font-bold tracking-tight">
          How can we assist you?
        </h1>
        <p className="text-xl md:text-xl text-gray-200 max-w-2xl mx-auto">
          Find answers to common questions or get support from our team.
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Describe your issue..."
            className="w-full md:w-2/3 lg:w-1/2 px-8 py-5 text-white bg-white bg-opacity-80 rounded-full shadow-xl border-none focus:outline-none focus:ring-2 focus:ring-[#FF6F61] focus:bg-transparent focus:border-[#FF6F61] transition duration-200 placeholder-gray-500"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-5 rounded-3xl shadow-2xl p-8 md:p-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Browse Help Topics
          </h2>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="group bg-black bg-opacity-20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <summary className="cursor-pointer text-xl md:text-2xl font-semibold flex justify-between items-center text-white">
                Fix a problem
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-blue-400" />
              </summary>
              <div className="mt-4 pl-4 text-base md:text-lg text-gray-100 border-l-4 border-blue-400">
                Troubleshoot video playback issues, fix upload problems, and
                resolve account issues efficiently.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-black  bg-opacity-20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <summary className="cursor-pointer text-xl md:text-2xl font-semibold flex justify-between items-center text-white">
                Watch videos
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-green-400" />
              </summary>
              <div className="mt-4 pl-4 text-base md:text-lg text-gray-100 border-l-4 border-green-400">
                Learn how to watch videos on various devices and troubleshoot
                playback problems.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-black  bg-opacity-20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <summary className="cursor-pointer text-xl md:text-2xl font-semibold flex justify-between items-center text-white">
                Manage your account and settings
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-yellow-400" />
              </summary>
              <div className="mt-4 pl-4 text-base md:text-lg text-gray-100 border-l-4 border-yellow-400">
                Update your account settings, manage privacy preferences, and
                secure your account.
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-black  bg-opacity-20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
              <summary className="cursor-pointer text-xl md:text-2xl font-semibold flex justify-between items-center text-white">
                Account Recovery
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-red-400" />
              </summary>
              <div className="mt-4 pl-4 text-base md:text-lg text-gray-100 border-l-4 border-red-400">
                Steps to recover your account if you've forgotten your password
                or lost access.
              </div>
            </details>

            {/* Add more FAQs as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
