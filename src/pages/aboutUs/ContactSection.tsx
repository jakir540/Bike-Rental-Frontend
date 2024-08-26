// const ContactSection = () => {
//   return (
//     <section>
//       <h2 className="text-4xl font-semibold mb-8 text-[#DE4313]">Contact Us</h2>
//       <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
//         <p className="text-lg font-semibold mb-4 text-gray-900">
//           Office Address
//         </p>
//         <p className="text-gray-700 mb-4">123 Bike Lane, Cityville, ST 45678</p>
//         <p className="text-lg font-semibold mb-4 text-gray-900">Phone Number</p>
//         <p className="text-gray-700 mb-4">(123) 456-7890</p>
//         <p className="text-lg font-semibold mb-4 text-gray-900">Email</p>
//         <p className="text-gray-700">contact@bikerent.com</p>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for marker icons not showing up
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactSection = () => {
  const position = [23.8041, 90.4152]; // Default coordinates (latitude, longitude)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-[#DE4313]">
          Find Us Here
        </h2>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={position} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                We are here! <br /> 123 Bike Lane, Cityville.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
