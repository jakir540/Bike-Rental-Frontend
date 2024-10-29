import { useState, useEffect } from "react";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import UpdateProfileModal from "./UpdateProfileModal";

const ProfilePage = () => {
  const { data, error, isLoading, refetch } = useShowProfileQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

          {/* Personal Information */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">
              Personal Information
            </h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
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
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                {userProfile?.role}
              </div>
            </div>
          </div>

          {/* Phone Info */}
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

          {/* Address Info */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">Address</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
                <p>
                  <strong className="text-gray-300"></strong> {address || "N/A"}
                </p>
              </span>
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                1229
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      <UpdateProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userProfile={userProfile} // Pass the current user data
      />
    </div>
  );
};

export default ProfilePage;

// import { useState, useEffect } from "react";
// import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
// import UpdateProfileModal from "./UpdateProfileModal";
// import {
//   Line,
//   Bar
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// // Register chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ProfilePage = () => {
//   const { data, error, isLoading, refetch } = useShowProfileQuery(undefined);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (data) {
//       refetch();
//     }
//   }, [data, refetch]);

//   const userProfile = data?.data;
//   const { name, phone, address } = userProfile || {};

//   // Sample data for bike rentals
//   const bikeStatisticsData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [
//       {
//         label: "Bikes Rented",
//         data: [30, 45, 60, 70, 80, 100, 95, 120, 110, 130, 125, 140], // Sample rental data
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "#DE4313",
//         borderWidth: 2,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Monthly Bike Rentals",
//         font: { size: 18 },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { color: "#FFFFFF" },
//         grid: { color: "#3A3A3A" },
//       },
//       x: {
//         ticks: { color: "#FFFFFF" },
//         grid: { color: "#3A3A3A" },
//       },
//     },
//   };

//   if (isLoading)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
//         Loading...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-xl text-red-600">
//         Error fetching profile data.
//       </div>
//     );

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white">
//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-96">
//           {/* Profile Card */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//             <p className="text-gray-400 mt-2">Profile Information</p>
//             <h2 className="text-2xl font-bold text-[#DE4313]">Welcome,</h2>
//             <div className="mt-4 space-y-2">
//               <span className="text-3xl text-gray-300">{name}</span>
//             </div>
//           </div>

//           {/* Personal Information */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//             <h3 className="text-xl font-semibold text-[#DE4313]">
//               Personal Information
//             </h3>
//             <div className="flex items-center justify-between mt-4">
//               <span className="text-gray-400">
//                 <p>
//                   <strong className="text-gray-300">Name:</strong> {name}
//                 </p>
//                 <p>
//                   <strong className="text-gray-300">Email:</strong>{" "}
//                   {userProfile?.email}
//                 </p>
//                 <p>
//                   <strong className="text-gray-300">Role:</strong>{" "}
//                   {userProfile?.role}
//                 </p>
//               </span>
//               <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
//                 {userProfile?.role}
//               </div>
//             </div>
//           </div>

//           {/* Bike Statistics Graph */}
//           <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl col-span-full">
//             <h3 className="text-xl font-semibold text-[#DE4313]">Bike Rental Statistics</h3>
//             <div className="mt-4">
//               <Bar data={bikeStatisticsData} options={options} />
//             </div>
//           </div>
//         </div>

//         {/* Call-to-Action Button */}
//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={openModal}
//             className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-400"
//           >
//             Update Profile
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <UpdateProfileModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         userProfile={userProfile}
//       />
//     </div>
//   );
// };

// export default ProfilePage;
