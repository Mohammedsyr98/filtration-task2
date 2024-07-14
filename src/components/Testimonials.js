import star from "../images/ant-design_star-filled.png";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Testimonials({ scrollToContactForm }) {
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
      className="testimonials mt-12 flex flex-col items-center bg-custom1 relative">
      <div className="background w-full h-full absolute opacity-40"></div>
      <span className="text-white  text-5xl lg:text-8xl font-black text-center py-12 ">
        TESTIMONIALS
      </span>
      <div className="boxes z-10 mx-8 xl:mx-0 flex flex-col lg:flex-row justify-center flex-wrap ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <div
            style={{ minWidth: "300px", maxWidth: "500px" }}
            className="box mb-3 xl:m-6 p-5  bg-white rounded-3xl w-full flex flex-col justify-start basis-full xl:basis-2/4">
            <span className="text-custom1 text-base font-bold">
              Kathryn Murphy
            </span>
            <span className="text-base leading-5 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </span>
            <ul className="flex flex-row gap-2 pt-5">
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <div
            style={{ minWidth: "300px", maxWidth: "500px" }}
            className="box mb-3 xl:m-6 p-5  bg-white rounded-3xl w-full flex flex-col justify-start basis-full xl:basis-2/4">
            <span className="text-custom1 text-base font-bold">
              Kathryn Murphy
            </span>
            <span className="text-base leading-5 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </span>
            <ul className="flex flex-row gap-2 pt-5">
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <div
            style={{ minWidth: "300px", maxWidth: "500px" }}
            className="box mb-3 xl:m-6 p-5  bg-white rounded-3xl w-full flex flex-col justify-start basis-full xl:basis-2/4">
            <span className="text-custom1 text-base font-bold">
              Kathryn Murphy
            </span>
            <span className="text-base leading-5 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </span>
            <ul className="flex flex-row gap-2 pt-5">
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <div
            style={{ minWidth: "300px", maxWidth: "500px" }}
            className="box mb-3 xl:m-6 p-5  bg-white rounded-3xl w-full flex flex-col justify-start basis-full xl:basis-2/4">
            <span className="text-custom1 text-base font-bold">
              Kathryn Murphy
            </span>
            <span className="text-base leading-5 pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </span>
            <ul className="flex flex-row gap-2 pt-5">
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
              <li>
                <img src={star} alt="star" />
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <button
        onClick={scrollToContactForm}
        className="bg-buttonColor z-10 w-fit mx-auto my-12 pt-3 pb-3 md:pt-topForButton mt-10 md:pb-topForButton text-white font-bold md:font-black pr-10 md:pr-rightLeftForButton pl-10 md:pl-rightLeftForButton rounded-full ">
        CONTACT US
      </button>
    </div>
  );
}
