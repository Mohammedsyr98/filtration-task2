import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import HowWork from "./components/How-work";
import MealsSlider from "./components/MealsSlider";
import Testimonials from "./components/Testimonials";
import { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);
  function scrollToContactForm() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Hero />
      <HowWork scrollToContactForm={scrollToContactForm} />
      <AboutUs scrollToContactForm={scrollToContactForm} />
      <div
        style={{ minHeight: "540px" }}
        className="recipes bg-white pt-12 flex flex-col ">
        <span className="text-custom1 text-5xl lg:text-8xl font-black text-center pb-12">
          RECIPES
        </span>

        <MealsSlider />
        <button
          onClick={scrollToContactForm}
          className="bg-buttonColor w-fit mx-auto mt-12 pt-3 pb-3 md:pt-topForButton mt-10 md:pb-topForButton text-white font-bold md:font-black pr-10 md:pr-rightLeftForButton pl-10 md:pl-rightLeftForButton rounded-full ">
          CONTACT US
        </button>
      </div>
      <Testimonials scrollToContactForm={scrollToContactForm} />
      <ContactUs contactRef={contactRef} />
      <footer style={{ height: "117px", background: "#584125" }}></footer>
    </>
  );
}
