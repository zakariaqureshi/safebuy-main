import React from "react";
import Header from "./component/header";
import { Outlet, Link } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component

export default function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* This Outlet will render the matched nested route's component (e.g., Login or Signup) */}
      <Outlet />

      {/* Navigation links to Login and Signup pages (if you want them in your App component) */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="max-w-screen-xl mx-auto flex justify-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/login"
                className="text-lg font-semibold hover:text-blue-400 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-lg font-semibold hover:text-green-400 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
