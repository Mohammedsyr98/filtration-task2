import logo from "../images/logo.png";

import bread from "../images/bread.png";
import leftPhoto from "../images/left-photo.png";
import social1 from "../images/social1.svg";
import social2 from "../images/social2.svg";
import social3 from "../images/social3.svg";
import social4 from "../images/social4.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Hero() {
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
      className="background hero flex flex-row items-start relative">
      <div className="flex min-h-500 ml-0 flex-col container  pr-0 ">
        <nav className="navbar flex flex-row items-center  m-0 mt-6 ">
          <img src={logo} alt="logo" className="w-14" />
          <span className="text-white font-bold uppercase ml-3">
            Peachy Pup
            <br />
            Bakery
          </span>
        </nav>
        <div className="content   lg:pt-32 flex-row flex items-start ">
          <div className="text lg:pt-10 md:pb-64 w-2/4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}>
              <h2 className="text-2xl  xl:text-6xl w-max text-white font-extrabold pt-7 lg:pt-0 uppercase">
                Tasty pastries
              </h2>

              <span className="block  text-base md:text-lg pr-0 md:pr-24 pt-5 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </span>

              <button className="bg-buttonColor pt-3 pb-3 md:pt-topForButton mt-2 xl:mt-10 md:pb-topForButton text-white font-bold md:font-black pr-10 md:pr-rightLeftForButton pl-10 md:pl-rightLeftForButton rounded-full ">
                SEE MORE
              </button>
            </motion.div>
          </div>
          <div className="image w-2/3 lg:w-9/12 pb-16   mt-4 md:pt-0">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
              }}>
              <img src={bread} alt="bread" />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "30%" }}
        className="left-photo absolute z-10 bg-white bottom-0">
        <div className="icons">
          <ul className="flex lg:top-0 right-0 lg:block flex-row pt-2 bottom-5  absolute lg:bottom-0">
            <li class="lg:pt-4 pr-2 lg:pr-9">
              <a href="#">
                <img src={social1} alt="social1" />
              </a>
            </li>
            <li class="lg:pt-4 pr-2 lg:pr-9">
              <a href="#">
                <img src={social2} alt="social2" />
              </a>
            </li>
            <li class="lg:pt-4 pr-2 lg:pr-9">
              <a href="#">
                <img src={social3} alt="social3" />
              </a>
            </li>
            <li class="lg:pt-4 pr-2 lg:pr-9">
              <a href="#">
                <img src={social4} alt="social4" />
              </a>
            </li>
          </ul>
        </div>
        <span className="text-white -right-44 lg:-right-64  font-bold text-xs lg:text-lg absolute bottom-5">
          Telephone: <span className="font-medium">+7 700 000 00 00</span>
        </span>
        {/* <img class="left" src={leftPhoto} alt="leftPhoto" /> */}
        <div className="test h-full w-100"></div>
      </div>
    </div>
  );
}
