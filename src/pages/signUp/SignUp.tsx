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
      toast.success("Sign up successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Sign up failed!");
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] shadow-lg">
      <h2 className="py-8 text-5xl font-bold text-center text-white">SignUp</h2>
      <div className="flex items-center justify-around px-6 py-16">
        {/* Animation Section */}
        <div>
          <Lottie options={defaultOptions} />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-lg p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl transform transition-all hover:scale-105">
          <h3 className="text-3xl font-extrabold text-center text-gray-50 mb-6">
            Create an Account
          </h3>
          <p className="text-center text-gray-300 mb-8">
            Join us and enjoy our premium services.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
                Full Name
              </label>
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid",
                  },
                })}
                className={`w-full px-4 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
                Email Address
              </label>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-4 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
                Password
              </label>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="text"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number is invalid",
                  },
                })}
                className={`w-full px-4 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
                Phone Number
              </label>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="relative">
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                className={`w-full px-4 py-3 bg-transparent border-2 rounded-xl text-gray-200 placeholder-gray-500 focus:ring-4 focus:ring-[#FF6F61] outline-none ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
                Home Address
              </label>
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
