import faq from "../../../assets/faq.jpg";
import { FiChevronDown } from "react-icons/fi"; // Importing an icon for dropdowns

const FaqSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] text-white opacity-90 py-20 ">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-[#F5F5F5]">
          How can we help you?
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          Find answers to your questions or get in touch with support.
        </p>

        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Describe your issue..."
            className="w-full md:w-3/4 lg:w-1/2 px-6 py-4 text-gray-900 bg-gradient-to-r from-[#E0F7FA] to-[#FFFFFF] rounded-full shadow-lg border-none focus:outline-none focus:ring-4 focus:ring-[#FF6F61] transition duration-200"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-lg shadow-2xl p-12 text-black">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Browse Help Topics
          </h2>

          <div className="flex justify-center mb-12">
            <img
              src={faq}
              alt="FAQ"
              className="w-full md:w-3/4 lg:w-1/2 rounded-lg transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <details className="group bg-gradient-to-br from-[#F3F4F6] to-[#E0F7FA] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="cursor-pointer text-2xl font-medium flex justify-between items-center text-gray-800">
                Fix a problem
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-[#4A90E2]" />
              </summary>
              <div className="mt-4 pl-4 text-lg text-gray-700 border-l-4 border-[#FF9A76]">
                Troubleshoot video playback issues, fix upload problems, and
                resolve account issues quickly.
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-gradient-to-br from-[#F3F4F6] to-[#E0F7FA] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="cursor-pointer text-2xl font-medium flex justify-between items-center text-gray-800">
                Watch videos
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-[#8E44AD]" />
              </summary>
              <div className="mt-4 pl-4 text-lg text-gray-700 border-l-4 border-[#FF9A76]">
                Learn how to watch videos on various devices and troubleshoot
                playback problems.
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-gradient-to-br from-[#F3F4F6] to-[#E0F7FA] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <summary className="cursor-pointer text-2xl font-medium flex justify-between items-center text-gray-800">
                Manage your account and settings
                <FiChevronDown className="group-open:rotate-180 transition-transform duration-200 text-[#FF9A76]" />
              </summary>
              <div className="mt-4 pl-4 text-lg text-gray-700 border-l-4 border-[#FF6F61]">
                Update your account settings, manage privacy preferences, and
                secure your account.
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
