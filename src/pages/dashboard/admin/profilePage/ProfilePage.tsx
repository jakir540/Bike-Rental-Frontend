import { useState, useEffect } from "react";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";
import UpdateProfileModal from "./UpdateProfileModal";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfilePage = () => {
  const { data, error, isLoading, refetch } = useShowProfileQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  const userProfile = data?.data;
  const { name, phone, address } = userProfile || {};

  const bikeStatisticsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Bikes Rented",
        data: [30, 45, 60, 70, 80, 100, 95, 120, 110, 130, 125, 140],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "#DE4313",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Bike Rentals",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#FFFFFF" },
        grid: { color: "#3A3A3A" },
      },
      x: {
        ticks: { color: "#FFFFFF" },
        grid: { color: "#3A3A3A" },
      },
    },
  };

  const recentRentals = [
    {
      bikeId: "B001",
      date: "2024-10-01",
      userId: "U123",
      duration: "3 hrs",
      status: "Completed",
    },
    {
      bikeId: "B002",
      date: "2024-10-02",
      userId: "U124",
      duration: "5 hrs",
      status: "In Progress",
    },
    {
      bikeId: "B003",
      date: "2024-10-03",
      userId: "U125",
      duration: "2 hrs",
      status: "Cancelled",
    },
    {
      bikeId: "B004",
      date: "2024-10-04",
      userId: "U126",
      duration: "4 hrs",
      status: "Completed",
    },
    {
      bikeId: "B005",
      date: "2024-10-05",
      userId: "U127",
      duration: "6 hrs",
      status: "Completed",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="flex-1 p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile and Info Cards */}

          <div className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 p-4 rounded-full">
                <span className="text-3xl text-white font-bold">
                  {name?.charAt(0)}
                </span>
              </div>
              <h2 className="text-2xl font-bold mt-4">Welcome, {name}</h2>
            </div>
          </div>

          {/* Phone Info */}
          {/* Personal Information */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            {" "}
            <h3 className="text-xl font-semibold text-[#DE4313]">
              Personal Information{" "}
            </h3>{" "}
            <div className="flex items-center justify-between mt-4">
              {" "}
              <span className="text-gray-400">
                {" "}
                <p>
                  {" "}
                  <strong className="text-gray-300">Name:</strong> {name}{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="text-gray-300">Email:</strong>{" "}
                  {userProfile?.email}{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="text-gray-300">Role:</strong>{" "}
                  {userProfile?.role}
                </p>
              </span>
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                {userProfile?.role}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[#DE4313]">Phone:</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-400">
                <p>
                  <strong className="text-gray-300"></strong> {phone || "N/A"}{" "}
                </p>{" "}
              </span>
              <div className="h-12 w-12 rounded-full bg-[#DE4313] text-white font-bold flex items-center justify-center">
                {" "}
                BD{" "}
              </div>{" "}
            </div>{" "}
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl col-span-full">
            <h3 className="text-xl font-semibold text-[#DE4313]">
              Bike Rental Statistics
            </h3>
            <div className="mt-4">
              <Bar data={bikeStatisticsData} options={options} />
            </div>
          </div>
        </div>

        {/* Recent Rentals Table */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-[#DE4313]">
            Recent Bike Rentals
          </h3>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-gray-700 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-600 text-gray-200">
                  <th className="py-3 px-4 text-left">Bike ID</th>
                  <th className="py-3 px-4 text-left">Rental Date</th>
                  <th className="py-3 px-4 text-left">User ID</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRentals.map((rental, index) => (
                  <tr
                    key={rental.bikeId}
                    className={`${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition-colors`}
                  >
                    <td className="py-3 px-4">{rental.bikeId}</td>
                    <td className="py-3 px-4">{rental.date}</td>
                    <td className="py-3 px-4">{rental.userId}</td>
                    <td className="py-3 px-4">{rental.duration}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        rental.status === "Completed"
                          ? "text-green-500"
                          : rental.status === "In Progress"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {rental.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-2xl transform transition-transform duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>

      <UpdateProfileModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userProfile={userProfile}
      />
    </div>
  );
};

export default ProfilePage;
