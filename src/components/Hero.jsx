import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import About from "./About";
import Slider from "./Slider";
import ServicesSection from "./Services";
import ScrollingTours from "./Scrollingtour";

const Hero = () => {
  

  return (
    <>
    
  <Slider/>
  <About/>
  <ServicesSection/>
  <ScrollingTours/>
    </>
  );
};

export default Hero;
