"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import ClientSlider from "../../../../public/Assets/clientslider.jpg";
import Image from "next/image";
const ClientsSlide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const clientLogos = [
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
    "logoipsum",
  ];

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5},
    },
  };

  const slideVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="container-fluid p-0 m-0">
      <section className="clients-section">
        <div className="container-fluid">
          <div className="clients-header">
            <div className="first-side">
              <motion.h2
                className="clients-title"
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
              >
                Our clients
              </motion.h2>
            </div>

            <div className="second-set">
              <motion.div
                className="clients-marquee"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
              >
                <motion.div
                  className="marquee-content"
                  variants={slideVariants}
                  animate="animate"
                >
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="client-logo">
                      <div className="logo-circle">
                        <span className="logo-text">D</span>
                      </div>
                      <span className="logo-name">{logo}*</span>
                    </div>
                  ))}

                  {clientLogos.map((logo, index) => (
                    <div key={`dup-${index}`} className="client-logo">
                      <div className="logo-circle">
                        <span className="logo-text">D</span>
                      </div>
                      <span className="logo-name">{logo}*</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="clients-description"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </motion.p>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card p-2">dfd</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsSlide;
