import Loading from "@/components/loadingPage/Loading";
import { useUpdateProfileMutation } from "@/redux/features/users/showProfile/showProfileApi";
import { ChangeEvent, FormEvent, useState } from "react";

interface IUserProfile {
  name: string;
  phone: string;
  address: string;
}

interface UpdateProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: IUserProfile | null;
}

const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({
  isOpen,
  onClose,
  userProfile,
}) => {
  const [formData, setFormData] = useState({
    name: userProfile?.name || "",
    phone: userProfile?.phone || "",
    address: userProfile?.address || "",
  });

  const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
  if (isError) {
    console.log("erroror oooooooooooo");
  }
  if (isLoading) {
    return <Loading />;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-[10px] shadow-xl w-11/12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#DE4313] text-white px-4 py-2 rounded hover:bg-[#FF6F61]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
