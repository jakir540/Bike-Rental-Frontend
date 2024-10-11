import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-6xl font-bold text-[#DE4313]">Oops!</h1>
        <h2 className="text-2xl mt-4 font-semibold text-gray-800">
          Something went wrong
        </h2>
        <p className="text-gray-600 mt-2">
          We're sorry, but it looks like an unexpected error has occurred.
        </p>

        <div className="mt-6">
          <img
            src="https://i.imgur.com/qIufhof.png"
            alt="Error Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate(-1)} // Navigate back to previous page
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")} // Navigate to homepage
            className="bg-[#DE4313] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
