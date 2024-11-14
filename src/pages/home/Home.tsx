import AllBikes from "./AllBikes";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FaqSection from "./FaqSection/FaqSection";
import Newsletter from "./NewsLetter";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import ChatWidget from "@/components/homeComponets/ChatWidget";

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
      <ChatWidget />
    </div>
  );
};

export default Home;
