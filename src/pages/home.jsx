import React, { useState, useEffect } from "react";

import Aboutus from "../assets/Aboutus.jpg";
import Logo from "../assets/logo.jpg";
import Menu from "../assets/bg_image.jpg";
export default function Home() {


    

    const slides = [
        {
            id: 1,
            image: Aboutus,
            title: "Are You Secure? Cyberattack",
            description: "No matter what your company size is, you are at the mercy of cyberattacks. Let SecureNet Team help you become ISO 27001 certified.",
        },
        {
            id: 2,
            image: Logo,
            title: "Stay Protected with ISO",
            description: "Gain access to the latest ISO certifications to keep your business secure.",
        },
        {
            id: 3,
            image: Menu,
            title: "Penetration Testing Services",
            description: "Ensure your application is safe with our penetration testing.",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically transition slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div>
            {/* Image Slider */}
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mt-10">
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full flex-shrink-0"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "50vh",
                                padding:'15'
                            }}
                        >
                            
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                        )
                    }
                >
                    &#10094;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                        )
                    }
                >
                    &#10095;
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Section: What We Offer */}
            <section className="py-16 bg-indigo-50">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-green-600 mb-12 underline">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Services */}
                        {[
                            {
                                title: "Smart Surveillance Systems",
                                description:
                                    "Our smart surveillance systems use AI and machine learning to ensure top-notch security for your home or business. Monitor everything in real-time from your mobile device.",
                            },
                            {
                                title: "Advanced Alarm Solutions",
                                description:
                                    "Our advanced alarm solutions are designed to protect you against intrusions and emergencies. Get instant notifications and ensure your safety at all times.",
                            },
                            {
                                title: "Cloud Security Solutions",
                                description:
                                    "Protect your data with our cloud-based security solutions. We provide secure data storage and access management to ensure your business stays protected.",
                            },
                            {
                                title: "Mobile App Development",
                                description:
                                    "Our team of expert developers can create user-friendly mobile apps to help you manage and monitor your security system directly from your smartphone.",
                            },
                            {
                                title: "Consultation & Support",
                                description:
                                    "We offer expert consultation and ongoing support to help you optimize your security system. Let us guide you through your security challenges and solutions.",
                            },
                            {
                                title: "Security System Installation",
                                description:
                                    "Our team provides professional installation of all your security devices. We ensure that your system is set up for maximum effectiveness and reliability.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-black-600 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-4">{service.description}</p>
                                <a href="#" className="text-indigo-600 font-semibold hover:underline">
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="bg-black-600 text-black py-6">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <p>&copy; 2024 Safetronics. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
