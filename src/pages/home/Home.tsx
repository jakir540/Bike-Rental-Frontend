import AllBikes from "./AllBikes";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FaqSection from "./FaqSection/FaqSection";
import Newsletter from "./NewsLetter";
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
      <Newsletter />
    </div>
  );
};

export default Home;
