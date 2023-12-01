// Content.jsx

import React from 'react';
import '../Style/content.css';

const Content = () => {
  return (
    <div className="content-container">
        <div className="left-content">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsjQmstA8MXQX5iexEjLFOzgW0P-Kxm3jSw&usqp=CAU"
            alt="Logo"
            className="contentlogo"
            />
            <h1 className="contentheader">WHO WE ARE?</h1>
            <p className="contentparagraph">
            CINETECH INDIA’s IT services experience includes significant exposure to Microsoft, RDBMS & Internet technologies, development of component application software, Customized software, re-architecting / porting applications, software testing & test automation (desktop products, web applications) and localization engineering.
            Our Technology and Quality group constantly keeps abreast of emerging technologies and keeps enhancing quality processes and integrating multiple technologies to help provide quality deliverables in a timely and cost-effective manner.
            </p>
            <button className="contentbutton">Learn More</button>
        </div>
        <div className="right-content1">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSFHRXGNJJpjxAyB05d-XbX0jc1uoIt4DwQ&usqp=CAU"
            alt="Image 1"
            className="image1"
            />
        
        
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzWNf3HSa76yrZd7JjzPZXHfTE6y89L_Kow&usqp=CAU"
            alt="Image 2"
            className="image2"
            />
       </div>
    </div>
  );
};

export default Content;
