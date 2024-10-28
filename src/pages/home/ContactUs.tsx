import Lottie from "react-lottie";
import animationData from "../../assets/contact.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const form = useRef<HTMLFormElement>(null);
  // for send message to user
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4u5ooq",
        "template_pdmpzex",
        form.current!,
        "C61pccjrY14jsvXqX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-[#1C2833] rounded-xl shadow-lg p-10 lg:mr-8 transition-all duration-300">
            <form ref={form} onSubmit={sendEmail}>
              {/* Name Field */}
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[#EAECEE] tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full px-5 py-3 border-none rounded-lg shadow-sm bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300 ease-in-out"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[#EAECEE] tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full px-5 py-3 border-none rounded-lg shadow-sm bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[#EAECEE] tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-36 px-5 py-3 border-none rounded-lg shadow-sm bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300 ease-in-out"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  value="send"
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#DE4313] to-[#FF6F61] text-white rounded-full font-semibold  shadow-lg hover:shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} className="px-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Lottie Animation Section */}
          <div className="lg:w-1/2 lg:h-[500px] mt-8 lg:mt-0">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
