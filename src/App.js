import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HotelListing from './components/HotelListing';
import Footer from './components/Footer';
import hotelsData from './data/hotels'; // Sample data for hotels


const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <HotelListing hotels={hotelsData} />
      <Footer />
    </div>
  );
}

export default App;
