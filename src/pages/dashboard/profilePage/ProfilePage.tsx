import { useShowProfileQuery } from "@/redux/features/showProfile/showProfileApi";

const ProfilePage = () => {
  // Use the custom query hook to fetch the user profile data
  const { data, error, isLoading } = useShowProfileQuery("");

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
          <strong>Email:</strong> {email}
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
