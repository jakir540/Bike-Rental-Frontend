import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaHome } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    navigate("/login?success=1");
  };

  return (
    <div className="min-h-screen shadow-lg bg-gradient-to-r from-[#FF6F61] via-[#1A1A2E] to-[#010313]">
      <h2 className="text-5xl font-bold text-center py-8 text-white">SignUp</h2>
      <div className="flex items-center justify-around min-h-screen p-6 pb-12 ">
        <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-3xl shadow-2xl transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
          <p className="text-center text-gray-500">
            Join us and enjoy our services
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
                placeholder="Full Name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="relative">
              <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number is invalid",
                  },
                })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="relative">
              <FaHome className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                className={`w-full px-10 py-3 border rounded-full shadow-sm ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-400 focus:border-transparent`}
                placeholder="Home Address"
              />
              {errors.address && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 
              
              bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold hover:shadow-xl hover:scale-105 transform  duration-400
              
              
              rounded-full shadow-lg  focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
