/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  // FaFacebookF,
  // FaGoogle,
  // FaGithub,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation login - 1724636559571.json";
import { useLoginMutation } from "@/redux/features/login/login";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import verifyToken from "@/utils/verifyToken";
import { useState } from "react";

// Firebase imports
// import { auth, googleProvider } from "../../../src/firebaseConfig";
// import { signInWithPopup } from "firebase/auth";
// import toast from "react-hot-toast";

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

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const [login, { isError, isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  if (isLoading) {
    return <p>data is loading......</p>;
  }
  if (isError) {
    return <p>Error data is loading </p>;
  }

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // // Google Sign-In Handler
  // const handleGoogleSignIn = async () => {
  //   try {
  //     console.log("clicked");
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     console.log("user", user.email);
  //     const token = await user.getIdToken();
  //     console.log("token", token);
  //     dispatch(setUser({ user: { email: user.email, role: "user" }, token }));
  //     toast.success("Logged in with Google!");
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.error("Google Sign-In Error:", error);
  //     toast.error("Google sign-in failed. Please try again.");
  //   }
  // };

  // onSubmit function
  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.token);
      console.log(user);
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
                defaultValue="test@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password field with visibility toggle */}
            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
                defaultValue="password123"
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

          {/* <div className="text-center text-gray-500">Or sign up with</div>

          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex justify-center space-x-4 mt-4">
              <button className="flex items-center px-4 py-2 space-x-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
                <FaFacebookF className="w-5 h-5" />
                <span>Facebook</span>
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="flex items-center px-4 py-2 space-x-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
              >
                <FaGoogle className="w-5 h-5" />
                <span>Google</span>
              </button>

              <button className="flex items-center px-4 py-2 space-x-2 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 ease-in-out">
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
