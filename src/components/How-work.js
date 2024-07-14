import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function HowWork({ scrollToContactForm }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      style={{ minHeight: "545px" }}
      className="flex flex-col background-reverse border-y-2 border-white">
      <div className="text container xl:pl-250  ml-0 mr-0 pr-0  pl-10   justify-between flex flex-row-reverse items-center">
        <span className="text-5xl  lg:text-8xl font-black pt-12 text-white ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}>
            <span className="  w-max flex xl:pr-40 flex-col items-end">
              HOW WE
              <br />
              <span> WORK</span>
            </span>
          </motion.div>
        </span>
        <motion.div
          className="w-30% "
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
          }}>
          <span className="pt-44 text-base font-bold w-30%   text-custom1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </span>
        </motion.div>
      </div>
      <div className="photos  pt-20 self-center justify-center lg:pl-40 gap-9 lg:pr-60 mr-0 flex flex-col flex-wrap lg:flex-nowrap md:flex-row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="md:basis-2/5 lg:basis-1/4">
            {" "}
            <img src={work1} alt="work1" />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="md:basis-2/5 lg:basis-1/4">
            {" "}
            <img src={work2} alt="work1" />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={controls}
          transition={{ duration: 0.9 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="md:basis-2/5 lg:basis-1/4">
            {" "}
            <img src={work3} alt="work1" />
          </div>
        </motion.div>
        <div className="md:basis-2/5 lg:basis-1/4">
          {" "}
          <img src={work4} alt="work1" />
        </div>
      </div>
      <button
        onClick={scrollToContactForm}
        className="bg-buttonColor self-center pt-3 pb-3 md:pt-topForButton mb-10 mt-10 md:pb-topForButton text-white font-bold md:font-black pr-10 md:pr-rightLeftForButton pl-10 md:pl-rightLeftForButton rounded-full ">
        CONTACT US
      </button>
    </div>
  );
}
