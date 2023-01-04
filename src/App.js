import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/MainView/Header';
import Footer from './Components/MainView/Footer';
import Home from './Pages/Home';
import IntroFeatures from './Pages/IntroFeatures';
import AboutUS from './Pages/AboutUS';
import ShopAccount from './Pages/ShopAccount';
import ContactUS from './Pages/ContactUS';
import Faq from './Pages/FAQ';
import Login from './Pages/Admin/Login';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/IntroFeatures" element={<IntroFeatures />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/ShopAccount" element={<ShopAccount />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
