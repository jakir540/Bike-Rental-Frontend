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
    <div className="fade-in min-h-screen bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-12 text-white tracking-wider">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Form Section */}
          <div className="w-full max-w-lg bg-[#1C2833] rounded-2xl shadow-2xl p-12 transition-all duration-300 transform hover:scale-105">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
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
                  className="w-full px-5 py-3 rounded-lg bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
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
                  className="w-full px-5 py-3 rounded-lg bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[#EAECEE] tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-40 px-5 py-3 rounded-lg bg-[#2E4053] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#FF5733] focus:outline-none transition-all duration-300"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#DE4313] to-[#FF6F61] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-110 flex justify-center items-center"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Lottie Animation Section */}
          <div className="lg:w-1/2 lg:h-[500px] mt-10 lg:mt-0 flex justify-center">
            <Lottie options={defaultOptions} height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
