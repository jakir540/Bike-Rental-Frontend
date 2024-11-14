/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import AllBikes from "./AllBikes";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FaqSection from "./FaqSection/FaqSection";
import Newsletter from "./NewsLetter";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import ChatWidget from "@/components/homeComponets/ChatWidget";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in");

    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
          console.log(`${entry.target} is visible now!`); // Debugging: Log when element becomes visible
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    fadeInSections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup on component unmount
    return () => {
      fadeInSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
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
