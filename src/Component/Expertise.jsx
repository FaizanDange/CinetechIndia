// Expertise.jsx

import React from 'react';
import '../Style/expertise.css';

const Expertise = () => {
  return (
    <div className="content-container">
      <div className="left-content">
        <div>
          <h1 className="contentheader">OUR EXPERTISE</h1>
          <p className="contentparagraph">
            We have a diverse team of highly trained and energetic professionals, working together to provide services for your business. As more businesses go online, the distinction between an adequate site and an image-enhancing marketing tool is becoming increasingly clear.
          </p>
          <div className="button-container">
            <button className="expertisebutton">Learn More</button>
          </div>
          <div className="image-container">
            <div className="passport-image">
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-646439976-612x612-1.jpg" alt="Passport Size Image 1" className="passport-image" />
              <div className="image-name">Jack Graham</div>
            </div>
            <div className="passport-image">
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-891418990-612x612-1.jpg" className="passport-image" />
              <div className="image-name">Aura  Brooks</div>
            </div>
            <div className="passport-image">
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-1179420343-612x612-1.jpg" alt="Passport Size Image 3" className="passport-image" />
              <div className="image-name">Eve crawford</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-840531052-612x612-1.jpg" alt="Your Image Alt Text" className="right-image" />
      </div>
    </div>
  );
};

export default Expertise;
