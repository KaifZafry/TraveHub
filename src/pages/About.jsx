import React from 'react'

const coreValues = [
  {
    icon: "/assets/images/travel.png",
    text: "All Travel Related Solution Under one roof, with good price and Service.",
  },
  {
    icon: "/assets/images/budget.png",
    text: "We design your plan as per your Budget or Comfort.",
  },
  {
    icon: "/assets/images/support.png",
    text: "Quick response with inquiry. Can help planning itinerary.",
  },
  {
    icon: "/assets/images/transportation.png",
    text: "We have private transport and tour packages with great services and reasonable price.",
  },
  {
    icon: "/assets/images/vendor.png",
    text: "We have Direct Contract with our Local vendor each and every destination.",
  },
];

const About = () => {
    return (
        <>
         <div className="banner-header max-h-[20rem] section-padding valign bg-img bg-fixed back-position-center" data-overlay-dark="5"
                    data-background="/assets/images/15.jpg">
                    <div className="container mx-auto">
                        <div className="container mx-auto p-4">
                            <div className="col-md-7 caption relative z-30 mt-30">
                                <h5>The best travel agency</h5>
                                <h1 className='text-white lg:text-5xl text-3xl'>We helping you find <span className='text-blue-600'>your dream</span> vacation</h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container mx-auto px-4 py-12 lg:py-10">
               
 <section className="bg-cover py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between lg:flex-row items-start gap-10">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <p className="mb-6 text-gray-700">
              Travehub is based in New Delhi and provides the highest quality travel services to travelers
              from all over the world. We have 13 years’ expertise in the travel and tourism industry. We
              specialize in outbound customized holiday packages.
              We understand the expectations of foreign business travelers and adapt our services to exceed them.
              With local operations covering the bulk of our destinations, we have personal knowledge of each
              distinct region and its transportation infrastructure, ensuring timely, professional service
              regardless of location.
            </p>
            

            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p>13+ Years of Experience</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✔</span>
                <p>150+ Tour Destinations</p>
              </li>
            </ul>

            <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md">
              <div className="text-2xl text-blue-600">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500">For information</p>
                <a href="tel:+919891777910" className="text-lg text-blue-700 font-semibold">
                  +91 98917 77910
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <img
                src="/assets/images/about2.png"
                alt="About DITW Holidays"
                className="rounded-lg  w-full"
              />

              {/* SVG Circle Text */}
              <div className="absolute top-0 left-0 w-[300px] h-[300px]">
                <svg
                  viewBox="0 0 300 300"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                    />
                  </defs>
                  <circle cx="150" cy="150" r="75" fill="none" />
                  <g>
                    <use href="#circlePath" fill="none" />
                    <text fill="#0f2454" fontSize="14">
                      <textPath href="#circlePath">
                        . Travehub . Travehub .Travehub. Travehub . Travehub
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* our core values */}
                 <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <img src={item.icon} alt={`Icon ${index + 1}`} className="h-10 w-10" />
                </div>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
            </div>
        </>
    )
}

export default About