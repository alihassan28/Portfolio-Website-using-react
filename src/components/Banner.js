/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
import Image from "../assets/avatar.png";
// import icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-black"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[72px]"
            >
              Ali <span>Hassan</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Student",
                  2000,
                  "Developer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A computer science student with keen interest in software development.
            </motion.p>
            {/* social links */}
<motion.div
  variants={fadeIn("up", 0.7)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
>
  <a href="https://www.linkedin.com/in/ali-hassan-9ba443226/" target="_blank" rel="noopener noreferrer" className="flex items-center">
    <FaLinkedin className="mr-1" />
    <span className="hidden lg:inline">LinkedIn</span>
  </a>
  <a href="https://github.com/alihassan28" target="_blank" rel="noopener noreferrer" className="flex items-center">
    <FaGithub className="mr-1" />
    <span className="hidden lg:inline">GitHub</span>
  </a>
  <a href="https://www.instagram.com/hassan41i/" target="_blank" rel="noopener noreferrer" className="flex items-center">
    <FaInstagram className="mr-1" />
    <span className="hidden lg:inline">Instagram</span>
  </a>
</motion.div>


          </div>
          {/* images */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] w-96"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

