import React from 'react';
import './ourStory.css';
import ScrollToTopLink from './ScrollToTopLink.js';

import AboutIMG1 from './AboutIMGS/AboutIMG1.png';
import AboutIMG2 from './AboutIMGS/AboutIMG2.png';
import map1 from './AboutIMGS/about-map-1.png';
import map2 from './AboutIMGS/about-map-2.png';
import AboutIMG5 from './AboutIMGS/AboutIMG5.png';


import AboutIMG6 from './AboutIMGS/AboutIMG6.jpg';

import { Link } from 'react-router-dom';




const Story = () => {
  return (
    <div>
      <div>
        <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Who We Are</span>
      </div>

      <div className="body-container">
        <div>
          <p className="first-text">
            The Box Project offers a unique way to give back to a  family in need. Our organization focuses on helping families living in one of the most impoverished regions in America--the Mississippi Delta. Through its “Recipient Family Match Program,” the Box Project connects families in need with people who care in pursuit of its mission to eradicate generational rural poverty in the MS Delta by establishing meaningful relationships, promoting education, and offering material aid.
            With help from referral agencies, the Box Project acts as a “matchmaker” to pair families with “sponsor volunteers.” This is where the magic truly happens. Sponsors offer a monthly box of basic need items and companionship to help families overcome obstacles of daily life in rural Mississippi. As the families come to know and trust each other, these monthly interactions grow into friendships that last a life-time.

          </p>
        </div>
        <div className="first-image">
          <img src={AboutIMG1} />
        </div>

      </div>

      <div className="body-container">
        <div className="second-image">
          <img src={AboutIMG2} />
        </div>
        <div >
          <p className="second-text">
            Some of our families have remained friends for over 30 years! The relationship between what we call “sister families” develops organically through frequent communication and photo sharing. Sponsors offer a monthly box of basic need items and companionship, encouraging recipients through the obstacles of daily life in rural Mississippi. For someone who struggles to get by day-to-day, knowing their sponsor cares about their personal well-being and future success has a drastic impact on their world-view and confidence. As the families come to know and trust each other, these monthly interactions grow into friendships that last a life-time.
            Some of our sponsors use this rich experience to teach their children the value of unselfish giving, and at the same time, learn that the true gift of giving is bestowed upon the giver.

          </p>
        </div>
      </div>

      <div>
        <ScrollToTopLink to="/our-impact">
          <span style={{ fontSize: '22px', display: 'block', textAlign: 'center', marginBottom: '50px', color: 'blue' }}>
            Learn about our recipient family success stories and sponsor-recipient relationships.
          </span>
        </ScrollToTopLink>
      </div>

      <div>
        <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Where We Serve</span>
      </div>
      <div>
        <span style={{ fontSize: '28px', color: 'black', display: 'block', textAlign: 'left', marginLeft: '35px', marginTop: '25px' }}>The Mississippi Delta Region</span>
      </div>

      <div >
        <div>
          <p className="third-text">
            The region known as the Mississippi Delta is historically one of the poorest in America. In fact, it has gathered national attention for its high rates of poverty, illiteracy, and poor living conditions, especially among those of color. Unfortunately, this remains the reality in 2023. Despite political and cultural shifts as well as community efforts to uplift this region, the cycle of poverty consists of generational financial disadvantages stemming from a number of factors, including low-income employment opportunities, low rates of educational attainment, and limited access to government resources, making sponsors and volunteers even more vital in determining the future of the Delta and the Box Project.
          </p>
        </div>
        <div className="img-six">
          <img src={AboutIMG5} alt="ms delta income chart" />
        </div>
        <div>
          <p className="third-text">
            Original areas in Mississippi served by the Box Project (left). Today, we serve the counties pictured on the right. Over 60+ years, the Box Project has served approximately 20,000 families.
          </p>
        </div>
        <div className='second-body-container'>
          <img className="map-one" src={map1} />
          <img className='map-two' src={map2} />
        </div>
        <div>
          <span className='third-text'>
            <i>Recently, the Box Project has run into a unique circumstance in which <u>the list of families in need of sponsors is much higher than the list of sponsor sign-ups.</u> As a result of inflation and the pandemic, both recipient and sponsor families face new financial stressors making the demand higher than the supply.
            </i></span>
          <span className='fourth-text'>Read More:
            <a href="https://www.nbcnews.com/news/us-news/covid-surges-mississippi-delta-food-banks-hospitals-are-stretched-thin-n1252574"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}> As Covid surges in Mississippi Delta, food banks and hospitals are stretched thin</a>
          </span>
        </div>
        <div >
          <span className='fourth-text'>Video: Impact of the Pandemic on Sponsorships</span>
          <iframe className='video-container'
            title="Embedded Video"
            src="https://drive.google.com/file/d/1pwjNAT4qxqv5LTjrpNf8dbu3FRVCieZU/preview"
            width="640"
            height="360"
            allow="autoplay"
          ></iframe>
        </div>
        <div>
        <ScrollToTopLink to="/get-involved">
          <span style={{ fontSize: '32px', display: 'block', textAlign: 'center', marginBottom: '50px', color: 'blue' }}>
            How YOU can Help the Box Project CREATE A BETTER TOMORROW
          </span>
        </ScrollToTopLink>
      </div>

      </div>




    </div>
  );
};

export default Story;