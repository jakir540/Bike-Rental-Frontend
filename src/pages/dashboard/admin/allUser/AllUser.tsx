/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllusersQuery,
  usePromoteUserToAdminMutation,
} from "@/redux/features/users/showProfile/user";
import toast from "react-hot-toast";
import Loading from "@/components/loadingPage/Loading";
import { IUser } from "@/types";
import ErrorPage from "../../ErrorPage/ErrorPage";
import { useShowProfileQuery } from "@/redux/features/users/showProfile/showProfileApi";

const AllUser = () => {
  const {
    data: allUsersData,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetAllusersQuery("");
  const {
    data: profileData,
    isLoading: profileLoading,
    refetch,
  } = useShowProfileQuery(undefined);
  const [updateUserRole] = usePromoteUserToAdminMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [userInfo, setUserInfo] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of users to display per page

  const users = allUsersData?.data;
  const loggedInUser = profileData?.data;
  console.log(loggedInUser);

  useEffect(() => {
    if (profileData) {
      refetch();
    }
  }, [profileData, refetch]);

  if (usersLoading || profileLoading) return <Loading />;
  if (usersError) return <ErrorPage />;

  const handleRoleChange = async (userId: string, role: string) => {
    try {
      await updateUserRole({ id: userId, role });
      toast.success("Role changed successfully");
    } catch (err) {
      console.error(err);
      toast.error("Role change operation failed");
    }
  };

  const handleDeleteUser = async () => {
    if (userInfo) {
      try {
        await deleteUser(userInfo._id);
        toast.success("User Deleted Successfully");
        setModalOpen(false);
      } catch (err) {
        console.error("Failed to delete user:", err);
        toast.error("Failed to delete user");
      }
    }
  };

  // Calculate the current page's users
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Total pages calculation
  const totalPages = Math.ceil((users?.length || 0) / itemsPerPage);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#0D3B66]">
        All Users
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-[#FF6F61] to-[#DE4313] text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">User Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Role</th>
              <th className="px-6 py-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentUsers?.map((user: IUser, index: number) => (
              <tr
                key={user.id}
                className={`hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user._id as string, e.target.value)
                    }
                    className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => {
                      setUserInfo(user);
                      setModalOpen(true);
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-[6px] shadow-md hover:from-red-600 hover:to-red-800 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-[6px] hover:bg-gray-400 transform transition duration-150"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-[6px] transition duration-300 ${
              currentPage === index + 1
                ? "bg-gradient-to-r from-red-500 to-red-700 text-white"
                : "bg-gray-200 text-[#FF6F61] hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-[6px] hover:bg-gray-400 transform transition duration-150"
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all duration-300 max-w-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this user? This action is
              irreversible.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transform transition duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUser}
                className="px-4 py-2 bg-red-600 text-white rounded-[6px] hover:bg-red-700 transform transition duration-150"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUser;
