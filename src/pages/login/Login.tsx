/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation login - 1724636559571.json";
import { useLoginMutation } from "@/redux/features/login/login";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import verifyToken from "@/utils/verifyToken";

interface FormData {
  email: string;
  password: string;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// Predefined credentials
const defaultCredentials = [
  { email: "user1@example.com", password: "password123" },
  { email: "johnn@example.com", password: "password123" },
];

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  // Track selected credentials
  const [selectedCredentials, setSelectedCredentials] = useState(0);

  // Set initial form values
  useEffect(() => {
    reset(defaultCredentials[0]);
  }, [reset]);

  const cycleCredentials = () => {
    const nextIndex = (selectedCredentials + 1) % defaultCredentials.length;
    setSelectedCredentials(nextIndex);
    reset(defaultCredentials[nextIndex]); // Reset the form values with new credentials
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token);
      dispatch(setUser({ user: { email: data.email }, token: res.token }));
      navigate("/dashboard");
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen shadow-lg bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313] py-10">
      <h2 className="text-5xl font-bold text-center mb-8 text-white">
        Login Here
      </h2>

      <div className="flex items-center justify-around p-6 py-16">
        <div>
          <Lottie options={defaultOptions} />
        </div>
        <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-3xl shadow-2xl transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
          <p className="text-center text-gray-500">
            Join us and enjoy our services
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid",
                  },
                })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Cycle through credentials */}
            <button
              type="button"
              onClick={cycleCredentials}
              className="text-blue-500 hover:underline text-center block w-full mt-2"
            >
              Use another set of credentials
            </button>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold hover:shadow-xl hover:scale-105 transform duration-400 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-gray-400 text-center">
            If you don't have an account, please
            <a
              href="/signup"
              className="capitalize px-1 text-blue-600 text-xl hover:text-blue-800 font-semibold transition-colors duration-200"
            >
              sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
