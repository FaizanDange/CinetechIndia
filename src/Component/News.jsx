// News.jsx

import React from 'react';
import '../Style/news.css'; // Make sure to import your CSS file

const News = () => {
  return (
    <div className='News'>

      <div className='NewsHeading'> 
         <h2>Latest News</h2>
      </div>

      <section className="articles">
        {/* First Card */}

        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-1187179171-612x612-1.jpg" alt="" />
            </figure>
            <div className="article-body">
              <h3>Cinetech_News</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam mi eu nulla ornare, eu aliquet diam fringilla. Nullam id lectus porttitor, euismod sapien vitae.
              </p>
              
            </div>
          </div>
        </article>

        {/* Second Card */}
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/istockphoto-1365436662-170667a.jpg " alt="" />
            </figure>
            <div className="article-body">
            <h3>Cinetech_News</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam mi eu nulla ornare, eu aliquet diam fringilla. Nullam id lectus porttitor, euismod sapien vitae.
              </p>
              
            </div>
          </div>
        </article>

        {/* Third Card */}
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://cinetechindia.com/wp-content/uploads/2022/04/pexels-brotin-biswas-518543.jpg" alt="" />
            </figure>
            <div className="article-body">
            <h3>Cinetech_News</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam mi eu nulla ornare, eu aliquet diam fringilla. Nullam id lectus porttitor, euismod sapien vitae.
              </p>
             
            </div>
          </div>
        </article>
      </section>

      <div className='btn'>
        <button className="Newsbutton">
          VIEW ALL NEWS
        </button>
      </div>
    </div>
  );
};

export default News;
