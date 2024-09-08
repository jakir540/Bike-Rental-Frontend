import AllBikes from "./AllBikes";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FaqSection from "./FaqSection/FaqSection";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllBikes />
      <Testimonial />
      <WhyChooseUs />
      <ContactUs />
      <FaqSection />
    </div>
  );
};

export default Home;
