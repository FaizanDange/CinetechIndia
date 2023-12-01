// contact.jsx
import React from 'react';
import '../Style/contact.css';

const Contact = () => {
  return (
    <div className="outer-container">
      <div className="InnerWrap">
        <div className="headerforInner">
          <h1>Ready To Take Next Move?</h1>
        </div>
        <button className="contact-button">
          Contact Us <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
