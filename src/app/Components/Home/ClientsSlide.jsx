"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import CardLogo from "../../../../public/Assets/cardiamge.png";
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

          <div className="w-80 mx-auto">
            <div className="my-5">
              <div className="row g-4 align-items-center">
                <div className="col-md-4 col-sm-12 mx-auto">
                  <div className="stat-card text-center">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        {" "}
                        <h1 className="stat-number">3000+</h1>
                        <p className="stat-text">happy clients</p>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <Image
                          src={CardLogo}
                          layout="responsive"
                          alt="card-log "
                        />
                        <br />
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <Image
                              src={CardLogo}
                              layout="responsive"
                              alt="card-log "
                            />
                          </div>
                          <div className="col-md-6">
                            <Image
                              src={CardLogo}
                              layout="responsive"
                              alt="card-log "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="stat-card image-card">
                    <div className="overlay">
                      <h1 className="stat-number text-white">100+</h1>
                      <p className="stat-text text-white">Active Projects</p>
                    </div>

                    <Image src={ClientSlider} alt="work" fill className="img" />
                  </div>
                </div>

                {/* Right Card */}
                <div className="col-md-4 col-sm-12 align-items-center">
                  <div className="stat-card mx-auto d-flex align-items-center justify-content-center">
                    <div>
                      <h1 className="stat-number">20+</h1>
                      <p className="stat-text">
                        Years
                        <br />
                        Experience
                      </p>
                    </div>

                    <div className="progress-ring">
                      <svg width="120" height="120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#e6f6f5"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="url(#grad)"
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="80"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="grad">
                            <stop offset="0%" stopColor="#25c6c1" />
                            <stop offset="100%" stopColor="#a6ede9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsSlide;
