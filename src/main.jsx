import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutUs from './pages/aboutUs.jsx';
import OurServices from './pages/ourServices.jsx';
import OurPartners from './pages/ourPartners.jsx';
import ContactUs from './pages/contactUs.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Logout from './pages/Logout.jsx';
import ProtectedRoute from './component/ProtectedRoute'; // Import the ProtectedRoute component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* These routes are protected */}
      <Route element={<ProtectedRoute />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/partners' element={<OurPartners />} />
        <Route path='/contact' element={<ContactUs />} />
      </Route>
      
      {/* These routes are public */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
