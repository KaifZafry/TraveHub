import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const About = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef();

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  const slides = [
    {
      imgSrc: "./src/assets/img/destination/baku.png",
      title: "Azerbaijan ",
    },
    {
      imgSrc: "./src/assets/img/destination/makkah.png",
      title: "Saudi Arabia",
    },
    {
      imgSrc: "./src/assets/img/destination/dubai.png",
      title: "Dubai",
    },
    {
      imgSrc: "./src/assets/img/destination/australia-2.jpg",
      title: "Australia",
    },
    {
      imgSrc: "./src/assets/img/destination/singapore2.jpg",
      title: "Singapore",
    },
  ];
  // Counter animation
  useEffect(() => {
    let current = 0;
    const target = 100000;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      current += 1000;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);
  }, []);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          className="flex flex-col items-center  bg-[#155dfc] text-white   text-center shadow-md p-4 rounded-lg hover:shadow-2xl transition"
        >
          <img
            src="assets/images/india.png"
            alt="India Tour"
            className="w-20 invert-100 h-20 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">India Tour Packages</h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex flex-col items-center  bg-[#155dfc] text-white  text-center shadow-md p-4 rounded-lg hover:shadow-2xl transition"
        >
          <img
            src="assets/images/international.png"
            alt="International Tour"
            className="w-20 invert-100 h-20 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">International Packages</h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-col items-center bg-[#155dfc] text-white   text-center shadow-md p-4 rounded-lg hover:shadow-2xl transition"
        >
          <img
            src="assets/images/holidays.png"
            alt="Holiday Ideas"
            className="w-20 invert-100 h-20 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">Holiday Ideas</h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col items-center  bg-[#155dfc] text-white   text-center shadow-md p-4 rounded-lg hover:shadow-2xl transition"
        >
          <img
            src="assets/images/honeymoon.png"
            alt="Honeymoon"
            className="w-20 invert-100 h-20 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold">Honeymoon Packages</h2>
        </div>
      </section>

      <section className="relative  bg-[rgb(54 133 251 / 6%)]">
        {/* Parallax Background 1 */}
        <Parallax
          bgImage="/assets/images/hero-shape-2-1.png"
          strength={200}
          className="absolute animate-bounce bottom-0 left-0 w-full h-full z-[-1]"
        ></Parallax>

        {/* Parallax Background 2 */}
        <Parallax
          bgImage="/assets/images/hero-shape-2-2.png"
          strength={300}
          className="absolute bottom-0 right-0 w-full h-full z-[-1]"
        ></Parallax>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div data-aos="fade-top">
              <h5 className="text-lg text-blue-600 font-semibold mb-3">
                Welcome to Travhub
              </h5>
              <h2 className="text-4xl lg:text-5xl font-bold leading-snug mb-6 relative z-10">
                Adventure & Experience <br /> The Travel!
              </h2>

              {/* Counter */}
              <div className="flex items-center gap-6 mt-6">
                <div>
                  <h3 className="text-4xl font-bold text-blue-600">
                    {count.toLocaleString()}+
                  </h3>
                  <p className="text-sm text-gray-600">Happy client</p>
                </div>
              </div>
              <div className="tours">
                <div>
                  <img src="/assets/images/" alt="" />
                  <div>
                    <h5>International Tours</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Stack */}
            <div className="relative space-y-4" data-aos="fade-top">
              <img
                src="/assets/images/hero-img.png"
                alt=""
                className="rounded-lg "
              />
              {/* <img src="/assets/images/hero-2-1.jpg" alt="" className="rounded-lg shadow-md absolute top-12 left-12 w-2/3" />
            <img src="/assets/images/hero-shape-2-3.png" alt="" className="absolute bottom-0 right-0 w-1/3" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="destination1 bg-lightnav">
        <div className="container mx-auto px-4 py-12 lg:py-10">
          <div className="row">
            <div className="col-md-12 mb-6 text-center">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="section-subtitle flex justify-center my-2 text-xl text-blue-500"
              >
                <img src="/assets/images/star.png" width={30} />
                Top Destination <img src="/assets/images/star.png" width={30} />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="section-title text-4xl lg:text-5xl font-bold text-black"
              >
                Popular <span>Destination</span>
              </div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            {slides.map((slide, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="item"
                key={index}
              >
                <div className="position-re o-hidden">
                  <img src={slide.imgSrc} alt={slide.title} />
                </div>
                <div className="con">
                  <h5>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      <i className="ti-location-pin"></i> {slide.title}
                    </a>
                  </h5>
                  <div className="line"></div>
                  <div className="row facilities">
                    <div className="col col-md-12">
                      <p></p>
                    </div>
                    <div className="col col-md-4 text-right">
                      <div className="permalink">
                        <a target="_blank" rel="noopener noreferrer" href="#">
                          Explore <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>

      <section data-aos="fade-up"  data-aos-duration="800">
        <div><img src="/assets/images/banner.png" className="w-full" alt="" /></div>
      </section>

      <section className="why-choose-us grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-10">
       
          <div className="why-choose-one__image" >
            <img
              src="assets/images/why-choose-one-1.jpg"
              alt="travhub"
              className="rounded-2xl" data-aos="fade-up"
          data-aos-duration="800"
            />

            <div className="why-choose-one__image__two">
              <img
                src="assets/images/why-choose-one-2.jpg"
                alt="travhub"
                data-aos="fade-up"
          data-aos-duration="400"
              />
            </div>
            <div className="why-choose-one__check">
              <div className="why-choose-one__check__icon">
                <i className="flaticon-check"></i>
              </div>
              
            </div>
          
          </div>
        
        <div>
           
            <h6 data-aos="fade-up"
          data-aos-duration="600" className="flex text-lg text-blue-600">Why we are? <img src="/assets/images/doubleStars.png" alt="" /></h6>
            <h3 data-aos="fade-up"
          data-aos-duration="700" className="text-4xl font-bold my-4 mb-8">Why Choose Us?</h3>
            <p data-aos="fade-up"
          data-aos-duration="800">We're dedicated to offering exceptional value for your travel investment. Our relationships with trusted travel partners</p>

            <div className="flex gap-4 my-8" data-aos="fade-up"
          data-aos-duration="800">
            <div className="p-4 bg-[#3685fb] rounded-2xl">
              <img src="assets/images/honeymoon.png" className="invert-100" width={60} alt="" />
            </div>
            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Personalized Trips</h5>
              <p>Your journey, your way — personalized trips designed to match your style and interests.</p>
            </div>
            </div>
            <div className="flex gap-4 my-8" data-aos="fade-up"
          data-aos-duration="800">
            <div className="p-4 bg-[#3685fb] rounded-2xl">
              <img src="assets/images/holidays.png" className="invert-100" width={60} alt="" />
            </div>
            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Trusted Travel Guide</h5>
              <p>Your reliable companion for unforgettable travel adventures.
                Explore the world with confidence, guided by trusted travel.</p>
            </div>
            </div>
            <div className="flex gap-4 my-8" data-aos="fade-up"
          data-aos-duration="800">
            <div className="p-4 bg-[#3685fb] rounded-2xl">
              <img src="assets/images/international.png" className="invert-100" width={60} alt="" />
            </div>
            <div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Trusted Travel Guide</h5>
              <p>Your reliable companion for unforgettable travel adventures.
                Explore the world with confidence.</p>
            </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default About;
