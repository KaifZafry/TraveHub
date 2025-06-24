import React from "react";

const services = [
    {
        title: "Domestic & International Flight Tickets",
        icon: "/assets/images/flight-ticket.png",
    },
    {
        title: "World Wide Hotel Booking",
        icon: "/assets/images/hotel.png",
    },
    {
        title: "Inbound & Outbound Holiday Package",
        icon: "/assets/images/holidays.png",
    },
    {
        title: "Haj & Umrah Services",
        icon: "/assets/images/kaaba.png",
    },
    {
        title: "Visa Assistance",
        icon: "/assets/images/visa.png",
    },
    {
        title: "Cruise & Eurail",
        icon: "/assets/images/cruise.png",
    },

];

export default function ServicesSection() {
    return (
        <section className=" py-16 px-4 relative bg-[url(/assets/images/mountain.jpg)] services">
            <div className="max-w-6xl mx-auto text-center">
                <h3 data-aos="fade-up"
                    data-aos-duration="800" className="text-indigo-600 font-semibold text-lg mb-2">Our Services</h3>
                <h2 data-aos="fade-up"
                    data-aos-duration="800" className="text-4xl font-bold text-white mb-4">Service We Offer</h2>
                <p data-aos="fade-up"
                    data-aos-duration="800" className="text-white mb-12 max-w-2xl mx-auto">
                    We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div data-aos="fade-up"
                            data-aos-duration="800"
                            key={index}
                            className="flex items-center service-box ease-in-out bg-[#002a3b] text-white px-5 py-4 rounded-full shadow-md hover:scale-105 "
                        >
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-10 h-10 invert-100 object-contain mr-4"
                            />
                            <div className="text-base font-medium leading-tight">
                                {service.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
