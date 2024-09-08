import { useShowProfileQuery } from "@/redux/features/showProfile/showProfileApi";

import { useSelector } from "react-redux";

const ProfilePage = () => {
  // Use the custom query hook to fetch the user profile data
  const { data, error, isLoading } = useShowProfileQuery("");
  const user = useSelector((state) => state.auth.user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching profile data.</div>;

  const { name, email, phone, address } = data || {};

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h2>Profile Information</h2>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <div>
            {user ? <p>Welcome, {user.email}</p> : <p>Please log in</p>}
          </div>
        </li>
        <li>
          <strong>Phone:</strong> {phone}
        </li>
        <li>
          <strong>Address:</strong> {address}
        </li>
      </ul>

      {/* Include an update form below */}
      {/* <UpdateProfileForm profile={data} /> */}
    </div>
  );
};

export default ProfilePage;
