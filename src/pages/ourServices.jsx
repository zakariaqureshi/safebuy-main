import React from 'react';

function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white-600 text-Blue py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl mb-8">
          Providing innovative security solutions for your Machines. 
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Smart Surveillance Systems</h3>
              <p className="text-gray-700 mb-4">
                Our smart surveillance systems use AI and machine learning to ensure top-notch security for your home or business. Monitor everything in real-time from your mobile device.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Advanced Alarm Solutions</h3>
              <p className="text-gray-700 mb-4">
                Our advanced alarm solutions are designed to protect you against intrusions and emergencies. Get instant notifications and ensure your safety at all times.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Cloud Security Solutions</h3>
              <p className="text-gray-700 mb-4">
                Protect your data with our cloud-based security solutions. We provide secure data storage and access management to ensure your business stays protected.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Mobile App Development</h3>
              <p className="text-gray-700 mb-4">
                Our team of expert developers can create user-friendly mobile apps to help you manage and monitor your security system directly from your smartphone.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Consultation & Support</h3>
              <p className="text-gray-700 mb-4">
                We offer expert consultation and ongoing support to help you optimize your security system. Let us guide you through your security challenges and solutions.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Security System Installation</h3>
              <p className="text-gray-700 mb-4">
                Our team provides professional installation of all your security devices. We ensure that your system is set up for maximum effectiveness and reliability.
              </p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                "Safetronics has provided us with the best security systems for our business. Their advanced surveillance systems give us peace of mind knowing our premises are always monitored."
              </p>
              <p className="text-indigo-600 font-semibold">John Doe</p>
              <p className="text-gray-500">CEO, TechSolutions</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                "We’ve been using Safetronics for our home security, and we couldn’t be happier. The mobile app is easy to use, and we always feel secure knowing our house is protected 24/7."
              </p>
              <p className="text-indigo-600 font-semibold">Jane Smith</p>
              <p className="text-gray-500">Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <p>&copy; 2024 Safetronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
