import React from 'react';
import './USPCarousel.css';

function USPCarousel() {
  const uspItems = [
    "LFP Battery: Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries...",
    "Wider Tyres: Now, say goodbye to skidding and embrace the leaning turns...",
    "Range Prediction: Many budget-friendly electric scooters overlook this crucial feature...",
    "Extraordinary Experience: Rhyno is more than just a mode of transportation...",
    "Rugged and Simple Design: We’ve had enough of the EVs looking and feeling like fragile plastic toys..."
  ];

  return (
    <div className="usp-carousel">
      {uspItems.map((item, index) => (
        <div key={index} className="usp-item">{item}</div>
      ))}
    </div>
  );
}

export default USPCarousel;
