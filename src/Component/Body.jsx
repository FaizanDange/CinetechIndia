// Body.jsx
import React from 'react';
import '../Style/body.css';

const Body = () => {
  return (
    <div className="body-container">
      <div className="left-image">
        <img
          src={process.env.PUBLIC_URL + 'https://cinetechindia.com/wp-content/uploads/2022/12/slider01.png'}
          alt="Left Image"
        />
      </div>
      <div className="BodyHeder">
        <h1 className='Header'>IT SERVICES FOR</h1>
        <div className='subHeader'>
          <h1 className='Header'>SOFTWARE PRODUCTS</h1>
        </div>
        <p className='paragraph'>
          CINETECH INDIA is a high-quality provider of IT services to software product, e-marketplaces, e-learning, manufacturing, and construction-related companies. Our emphasis on complete commitment to clients and a clear perspective on developing long-term relationships have ensured that we have a satisfied clientele spread across India & USA.
        </p>
        <button className='Button'>Learn More</button>
      </div>
    </div>
  );
};

export default Body;
