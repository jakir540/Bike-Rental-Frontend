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

  const users = allUsersData?.data;
  const loggedInUser = profileData?.data;

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

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#0D3B66]">
        All Users
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {users?.map((user: IUser, index: number) => (
          <form
            key={user.id}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-100 transform transition hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
          >
            <h3
              className={`text-2xl font-semibold mb-4 ${
                user._id === loggedInUser?._id
                  ? "text-green-600"
                  : "text-[#0D3B66]"
              }`}
            >
              User {index + 1}: {user.name}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Role
                </label>
                <select
                  name="role"
                  value={user.role}
                  onChange={(e) =>
                    handleRoleChange(user._id as string, e.target.value)
                  }
                  className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D3B66]"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                className="inline-flex items-center px-5 py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-[6px] shadow-md hover:from-red-600 hover:to-red-800 transform transition duration-300 ease-in-out"
                onClick={() => {
                  setUserInfo(user);
                  setModalOpen(true);
                }}
              >
                Delete User
              </button>
            </div>
          </form>
        ))}
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
