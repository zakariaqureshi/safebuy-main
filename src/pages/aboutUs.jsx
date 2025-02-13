import React from 'react';
import AboutUsImage from '../assets/Aboutus.jpg'; // Adjust the path if needed


function AboutPage() {
  return (
    <div className="bg-gray-50">
    

      {/* Hero Section */}
      <section className="relative bg-white-700 text-Black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl mb-8">
          At Safetronics, we are driven by a single mission: to make safety smarter, more accessible, and more reliable for every individual and business. As pioneers in the world of security technology, we combine cutting-edge innovation with a deep commitment to our clients’ well-being.
          Our team of engineers, designers, and security experts work tirelessly to develop products that are not only innovative and effective but also user-friendly and accessible. From smart surveillance systems to advanced alarm technology, our solutions are crafted with precision and care, ensuring that safety is never compromised.
          </p>
          {/* Hero Image */}
          <img
            src={AboutUsImage}  // Use the imported image here
            alt="Safetronics Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            At Safetronics, we strive to provide innovative solutions that help people achieve their goals. 
            We are dedicated to delivering exceptional quality and customer service, all while maintaining 
            a fun and supportive work environment.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-indigo-50">
        <div className="max-w-screen-xl mx-auto px-10 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" /> */}
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Saef Ali Mehdi</h3>
              <p className="text-gray-700">Sales Manager</p>
              <p className="text-gray-500 mt-2">Saef is the visionary behind Safetronics, constantly pushing boundaries to provide the best experience for our users.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" /> */}
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Abdullah Ahmad Nour</h3>
              <p className="text-gray-700">Sales Operator</p>
              <p className="text-gray-500 mt-2">Abdullah Ahmad Nour  plays a crucial role in driving revenue and building relationships with customers.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" /> */}
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Abdul Rehman Safe Ali</h3>
              <p className="text-gray-700">Sales Man</p>
              <p className="text-gray-500 mt-2">Abdul Rehman plays an important role in handling the Sales for the company and also a promoter for Safetronics</p>
            </div>
          </div>
        </div>
      </section>
             {/* Our Story Section */}
      <section id="story" className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Safetronics was founded in 2023 by a group of passionate individuals with a shared vision to revolutionize the security industry. What started as a small startup has now grown into one of the leading providers of Software solutions, Mobile App Development, Cloud Security and Hardware Solutions.
            Over the years, we’ve built a reputation for delivering reliable, high-performance systems that our customers can trust. We’ve expanded our product offerings, entered new markets, and continually improved our solutions to stay ahead of the curve in an ever-changing industry.
          </p>
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

export default AboutPage;
