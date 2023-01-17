import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const theBestVariants = {
  start: {
    x: 220,
  },
  end: {
    x: 7,
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const heartRateVariants = {
  start: {
    right: "-1rem",
  },
  end: {
    right: "4rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};
const caloriesVariants = {
  start: {
    x: "-1rem",
  },
  end: {
    x: "6rem",
    transition: {
      type: "tween",
      duration: 3,
    },
  },
};

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            variants={theBestVariants}
            initial="start"
            whileInView="end"
          ></motion.div>
          <span>the best fitness gym in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your live to fulllest
            </span>
          </div>
        </div>

        <div className="figure">
          <div>
            <span>
              <CountUp end={143} start={5} delay={2} prefix="+" />
            </span>
            <span>expert coaching</span>
          </div>
          <div>
            <span>
              <CountUp end={1051} start={100} delay={2} prefix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <CountUp end={42} start={10} delay={2} prefix="+" />
            </span>
            <span>fitness program </span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn"> Join Now</button>
        <motion.div
          className="heart-rate"
          transition={transition}
          variants={heartRateVariants}
          initial="start"
          whileInView="end"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image_back" />

        <motion.div
          className="calories"
          variants={caloriesVariants}
          initial="start"
          whileInView="end"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burn</span>
            <span>220 cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
