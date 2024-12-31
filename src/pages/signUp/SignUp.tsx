/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaHome } from "react-icons/fa";
import { useSignUpMutation } from "@/redux/features/signUp/signUp";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation login - 1724636559571.json";

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { role: "user" },
  });
  const [signUp] = useSignUpMutation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await signUp(data).unwrap();
      console.log(response);
      toast.success("Sign up successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Sign up failed!");
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="min-h-screen shadow-lg bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] py-10">
      <h2 className="py-8 text-5xl font-bold text-center text-white">
        Sign Up
      </h2>
      <div className="flex items-center justify-around p-6 py-16">
        {/* Animation Section */}
        <div className="w-full max-w-md">
          <Lottie options={defaultOptions} />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-lg p-10 space-y-6 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl transform transition-all hover:scale-105">
          <h3 className="text-3xl font-extrabold text-center text-gray-50 mb-6">
            Create an Account
          </h3>
          <p className="text-center text-gray-300 mb-8">
            Join us and enjoy our premium services.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Field */}
            <div className="relative">
              <FaUser className="absolute top-3 left-4 text-gray-400 text-xl" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-12 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Full Name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-4 text-gray-400 text-xl" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid",
                  },
                })}
                className={`w-full px-12 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute top-3 left-4 text-gray-400 text-xl" />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-12 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <FaPhone className="absolute top-3 left-4 text-gray-400 text-xl" />
              <input
                type="text"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number is invalid",
                  },
                })}
                className={`w-full px-12 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="relative">
              <FaHome className="absolute top-3 left-4 text-gray-400 text-xl" />
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                className={`w-full px-12 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Home Address"
              />
              {errors.address && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#FF6F61] to-[#DE4313] rounded-xl shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
