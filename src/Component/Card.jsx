// Card.jsx

import React from 'react';
import '../Style/card.css';

const Card = () => {
  return (
    <div className='CardMain'>
      <div className='classHeader'>
          <h1>OUR IT SERVICES</h1>
      </div>
      <div className="card-container">
        <div className="card1">
          <img src="https://cinetechindia.com/wp-content/uploads/2022/12/E-Solutions.png" alt="Logo" className="logo" />
          <div className="card-content">
            <h4 >E Solution</h4>
            <p>CINETECH INDIA is a high quality provider of IT services to software product, e-marketplaces, e-learning, manufacturing and construction related companies</p>
          </div>
        </div>

        <div className="card1">
          <img src="https://cinetechindia.com/wp-content/uploads/2022/12/Application-Devolopment.png" alt="Logo" className="logo" />
          <div className="card-content">
            <h4>Appliacation Development</h4>
            <p>Cinetech is an IT services provider which specializes in providing skills and services for application development for the Internet and Intranets. Our goal of is to maximize return-on- investments on application development</p>
          </div>
        </div>

        <div className="card1">
          <img src="https://cinetechindia.com/wp-content/uploads/2022/12/Software-Marketing.png" alt="Logo" className="logo" />
          <div className="card-content">
            <h4>Software Marketing</h4>
            <p>We serve marketing software refers to a compendium of systems designed to optimize the way businesses tap into their target market, execute campaigns, and convert leads into ROI. Ideal for companies of all sizes.</p>
          </div>
        </div>
      </div>
      <div className='CardButton'> 
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Card;
