import React from 'react';
import './HotelListing.css';
import HotelCard from './HotelCard';

const HotelListing = ({ hotels }) => {
  return (
    <section className="hotel-listing">
      <div className="hotel-cards">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}

export default HotelListing;
