/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div></div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent">About Me.</h2>
              <h3 className="h3 mb-4">
                Student at SRMIST, Full stack developer and a Freelancer
              </h3>
              <p className="mb-6">
                Hi there! I am Ali Hassan, a driven and self-taught software developer with a passion for solving complex problems and continuously expanding my knowledge of cutting-edge technologies. With over three years of experience in the industry, I have honed my skills and developed a strong background in development. I am highly motivated and possess a strong work ethic, which allows me to quickly adapt to new challenges and technologies.
              </p>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="https://your-portfolio-url.com" className="text-gradient btn-link" style={{ color: 'white' }}>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
