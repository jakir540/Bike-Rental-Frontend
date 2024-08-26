import aboutUs from "../../assets/man-choosed-motorcycle.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <div>
            <img className="rounded" src={aboutUs} alt="" />
          </div>

          <p className="text-lg text-gray-600">
            Learn more about our organization, our mission, our team, and our
            journey.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our platform is dedicated to providing an exceptional bike rental
            experience. We believe in promoting sustainable transportation and
            making cycling accessible to everyone. Our core values are
            commitment to quality, customer satisfaction, and environmental
            responsibility.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap -m-4">
            {/* Example Team Member */}
            <div className="p-4 w-full md:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="text-gray-700 mt-2">
                  Jane is the visionary behind our platform, with over a decade
                  of experience in the cycling industry. She is passionate about
                  sustainability and innovation.
                </p>
              </div>
            </div>
            {/* Repeat for additional team members */}
          </div>
        </section>

        {/* History & Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">
            Our History & Milestones
          </h2>
          <div className="border-l-2 border-gray-300 pl-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                2021 - Platform Launch
              </h3>
              <p className="text-gray-700">
                We officially launched our bike rental platform, aiming to
                provide a user-friendly and eco-conscious solution for urban
                transportation.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">2022 - Expansion</h3>
              <p className="text-gray-700">
                Our services expanded to new cities, reaching more customers and
                enhancing our network of bike stations.
              </p>
            </div>
            {/* Add more milestones as needed */}
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg font-semibold mb-4">Office Address</p>
            <p className="text-gray-700 mb-4">
              123 Bike Lane, Cityville, ST 45678
            </p>
            <p className="text-lg font-semibold mb-4">Phone Number</p>
            <p className="text-gray-700 mb-4">(123) 456-7890</p>
            <p className="text-lg font-semibold mb-4">Email</p>
            <p className="text-gray-700">contact@bikerent.com</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
