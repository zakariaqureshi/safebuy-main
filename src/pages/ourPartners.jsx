import React from "react";

export default function OurPartners() {
  return (
    <>
      
      {/* Main Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Our Trusted Partners</h1>
        <p className="text-xl text-center text-gray-600 mb-12">We are proud to collaborate with these amazing organizations to bring you the best services.</p>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Partner 1 */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Partner 1" 
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Partner 1</h2>
              <p className="mt-2 text-gray-600">Description of Partner 1. They are a leading company in the field.</p>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Partner 2" 
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Partner 2</h2>
              <p className="mt-2 text-gray-600">Description of Partner 2. A partner who excels in innovation.</p>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Partner 3" 
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Partner 3</h2>
              <p className="mt-2 text-gray-600">Description of Partner 3. Known for its commitment to excellence.</p>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Partner 4" 
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Partner 4</h2>
              <p className="mt-2 text-gray-600">Description of Partner 4. They bring creative solutions to the table.</p>
            </div>
          </div>

          {/* More Partners */}
          <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Partner 5" 
              className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Partner 5</h2>
              <p className="mt-2 text-gray-600">Partner 5 specializes in cutting-edge technology solutions.</p>
            </div>
          </div>

          {/* Add more partners if needed */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
