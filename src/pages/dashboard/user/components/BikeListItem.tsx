import { NavLink } from "react-router-dom";
import { TBike } from "@/types";

interface BikeListItemProps {
  bike: TBike;
}

const BikeListItem = ({ bike }: BikeListItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={bike.image} // Assuming each bike has an image field
        alt={bike.model}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-[#DE4313] mb-2">
        {bike.brand} - {bike.model}
      </h3>
      <p className="text-gray-700">Price: ${bike.pricePerHour}/hour</p>
      <p className="text-gray-700">Year: {bike.year}</p>
      <p className="text-gray-700">CC: {bike.cc}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
        possimus consectetur et. Aliquam perspiciatis aut itaque alias
        cupiditate soluta laboriosam officiis sapiente nisi, aspernatur tenetur
        possimus ex amet illo eveniet.
      </p>
      <p className="text-gray-700">
        Availability:{" "}
        {bike.availability === "available" ? "Available" : "Unavailable"}
      </p>

      {/* View Detail Button */}
      <NavLink
        to={`/bikes/${bike.id}`} // Navigates to the detailed bike page
        className="inline-block mt-4 bg-[#DE4313] text-white py-2 px-4 rounded-md hover:bg-[#FF6F61]"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default BikeListItem;
