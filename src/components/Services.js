/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services
const services = [
  {
    name: "Full Stack Developer",
    description:
      "Dedicated & efficient full stack developer with experience in building applications using the MERN stack (JavaScript/TypeScript) and some other cool libraries and frameworks.",
    link: "Learn more",
  },
  {
    name: "Problem Solving",
    description:
      "Data structure-savvy problem solver in programming. Analytical thinker, optimizing algorithms with arrays, linked lists, and trees etc. Strong systematic approach to problem-solving.",
    link: "Learn more",
  },
  {
    name: "Front-End Development",
    description:
      "Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and Next.js frameworks with state management libraries like Redux, Zustand etc.",
    link: "Learn more",
  },
  {
    name: "Back-End Development",
    description:
      "Working knowledge of GoLang, Node.js and related libraries and frameworks available (Express). Strong proficiency in the use of server-side templating languages (EJS).",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="txt"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              I'm a Freelance Front-end Developer with over 1 years of experience.
            </h3>
            <a href="https://github.com/alihassan28" className="btn btn-sm">
              See my work
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div className="flex-1">
              {services.map((service, index) => {
                // destructure data
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-white text-sm"> {/* Updated class name to "text-white" */}
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
