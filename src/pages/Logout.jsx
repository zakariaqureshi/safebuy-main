import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication status (e.g., remove from sessionStorage or state)
    sessionStorage.removeItem("isAuthenticated");  // Remove from sessionStorage

    // Redirect user to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Logout</h2>
        <p className="mb-6 text-center text-gray-600">
          You have been successfully logged in. Click below to logout.
        </p>
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
