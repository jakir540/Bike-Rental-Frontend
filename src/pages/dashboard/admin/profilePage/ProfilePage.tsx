import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data, error, isLoading, refetch } = useShowProfileQuery(undefined);

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  const userProfile = data?.data;
  const { name, phone, address } = userProfile || {};

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-600">
        Error fetching profile data.
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-96">
          {/* Profile Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="text-gray-400 mt-2">Profile Information</p>
            <h2 className="text-2xl font-bold text-[#DE4313]">Welcome,</h2>
            <div className="mt-4 space-y-2">
              <span className="text-3xl text-gray-300">{name}</span>
            </div>
          </div>

          {/* Card 2: Invoices */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">
              Personal Information
            </h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
                {" "}
                <p>
                  <strong className="text-gray-300">Name:</strong> {name}
                </p>
                <p>
                  <strong className="text-gray-300">Email:</strong>{" "}
                  {userProfile?.email}
                </p>
                <p>
                  <strong className="text-gray-300">Role:</strong>{" "}
                  {userProfile?.role}
                </p>
              </span>
            </div>
          </div>

          {/* Card 1: Pending Sign-offs */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">Phone:</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
                <p>
                  <strong className="text-gray-300"></strong> {phone || "N/A"}
                </p>
              </span>
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                BD
              </div>
            </div>
          </div>

          {/* Card 3: Live Jobs */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">Address</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
                {" "}
                <p>
                  <strong className="text-gray-300"></strong> {address || "N/A"}
                </p>
              </span>
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                80%
              </div>
            </div>
          </div>

          {/* Add more cards as necessary */}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
