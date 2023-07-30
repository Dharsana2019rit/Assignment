import React from 'react';
import './HotelCard.css';

const HotelCard = ({ hotel }) => {
  const { name, image, price, location, rating } = hotel;

  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-image" />
      <div className="hotel-info">
        <h3 className="hotel-name">{name}</h3>
        <p className="hotel-location">{location}</p>
        <p className="hotel-price">Price: ${price} per night</p>
        <p className="hotel-rating">Rating: {rating}</p>
      </div>
    </div>
  );
}

export default HotelCard;
