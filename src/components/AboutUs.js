import About from "../images/about.png";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function AboutUs({ scrollToContactForm }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      style={{ minHeight: "540px" }}
      className="background3 flex flex-col xl:flex-row items-start ">
      <div className="text w-3/5 container flex flex-col  ml-0 mr-0  pr-0 justify-between flex  items-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <span className="text-5xl  lg:text-8xl  font-black pt-12 text-white">
            ABOUT US
          </span>
        </motion.div>
        <span className="text-lg text-white font-bold  xl:pr-12 text-sm pt-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <button
          onClick={scrollToContactForm}
          className="bg-buttonColor  pt-3 pb-3 md:pt-topForButton mb-10 mt-10 md:pb-topForButton text-white font-bold md:font-black pr-10 md:pr-rightLeftForButton pl-10 md:pl-rightLeftForButton rounded-full ">
          CONTACT US
        </button>
      </div>
      <div className="p-10 image xl:pr-32 pt-16 pb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <img className="w-full" src={About} />
        </motion.div>
      </div>
    </div>
  );
}
