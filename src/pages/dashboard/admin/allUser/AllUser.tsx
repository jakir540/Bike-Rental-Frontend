import React, { useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllusersQuery,
  usePromoteUserToAdminMutation,
} from "@/redux/features/users/showProfile/user";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data, isLoading, isError, error } = useGetAllusersQuery("");
  const [updateUserRole, { isLoading: isUpdating }] =
    usePromoteUserToAdminMutation();

  const [deleteUser] = useDeleteUserMutation();

  // State to manage the user to be deleted
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  const users = data?.data;

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  // Handle user role update
  const handleRoleChange = async (userId: string, role: string) => {
    try {
      await updateUserRole({ id: userId, role });
      toast.success("Role changed successfully");
    } catch (err) {
      console.error(err);
      toast.error("Role change operation failed");
    }
  };

  // Handle user deletion
  const handleDeleteUser = async () => {
    if (userInfo) {
      try {
        await deleteUser(userInfo._id);
        toast.success("User Deleted Successfully");
        setModalOpen(false); //close modal after delete
      } catch (err) {
        console.error("Failed to delete user:", err);
        toast.error("Failed to delete user");
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Users</h2>
      <div className="space-y-8">
        {users?.map((user, index) => (
          <form
            key={user.id}
            className="p-6 bg-white shadow-md rounded-[8px] border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-4">
              User {index + 1}: {user.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  name="role"
                  value={user.role}
                  onChange={(e) =>
                    handleRoleChange(user._id as string, e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  value={user.active ? "Active" : "Inactive"}
                  readOnly
                  className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                    user.active
                      ? "bg-green-100 border-green-300 text-green-800"
                      : "bg-red-100 border-red-300 text-red-800"
                  }`}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-white bg-red-600 rounded-[6px] shadow-sm hover:bg-red-500"
                onClick={() => {
                  setUserInfo(user);
                  setModalOpen(true); // Open the modal
                }}
              >
                Delete User
              </button>
            </div>
          </form>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-[8px] shadow-lg max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to delete this user?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              You cannot recover the data once it's deleted.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUser}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
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
