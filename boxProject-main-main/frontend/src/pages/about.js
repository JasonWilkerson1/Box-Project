import React from 'react';
import './About.css';

import AboutIMG6 from './AboutIMGS/AboutIMG6.jpg';
import AboutIMG7 from './AboutIMGS/AboutIMG7.png';
import AboutIMG8 from './AboutIMGS/AboutIMG8.png';


const About = () => {
  return (

    <div>
      <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>
        About Us
      </span>

      <div>

        <span className='ari-content'>
          The Box Project’s mission is to encourage and enrich the lives of families and individuals living in rural poverty by establishing meaningful relationships, promoting education, and offering material aid. Without YOUR direct participation in our program, achieving this goal would be nearly impossible. With your help, more and more families living in rural poverty can have the opportunity to improve their lives. Each family touched by the Box Project is one step closer to breaking the cycle of generational poverty in the MS Delta.
        </span>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Video: Who Qualifies as a Recipient?</span>
          <iframe src="https://drive.google.com/file/d/1z2brW3oWL8tFYvs23FBN7EuGbkcarlY9/preview" width="738" height="415" allow="autoplay"></iframe>
        </div>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Video: The Referral Process</span>
          <iframe src="https://drive.google.com/file/d/1zCAYZ7Y5hganAXL-UiV2FMkSqpdUBspP/preview" width="738" height="415" allow="autoplay"></iframe>
        </div>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Audio: Identify Families</span>
          <iframe src="https://drive.google.com/file/d/1aplAvqLfaBcmiaWwR6SrDanpccqz4ca5/preview" width="738" height="50" allow="autoplay"></iframe>
        </div>

        <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>
          Our Agencies/Partners
        </span>

        <span className='ari-content'>
          Referral Agencies - BP partners with community agencies in the community to identify families and individuals in need. There is a careful screening process before being referred to the Box Project for matching.
        </span>

        <div >
          <img src={AboutIMG6} style={{ width: '700px', marginTop: '25px', marginBottom: '25px' }} alt="The Box Project Staff" />
        </div>

        <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>But God Ministries & Jonestown Life Center, Linda McGrew Interview</span>

        <div >
          <img src={AboutIMG7} style={{ width: '1000px', marginTop: '25px', marginBottom: '25px' }} alt="Jonestown Building" />
        </div>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Audio: But God Ministries & Box Project Mission</span>
          <iframe src="https://drive.google.com/file/d/1-Wt8GoYkIitwJyi5kDzAr2x9qgF7Mjl0/preview" width="738" height="50" allow="autoplay"></iframe>
        </div>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Audio: Box Project Relationship Testimonial</span>
          <iframe src="https://drive.google.com/file/d/1ZPlvkTrRT6jOF7zVZGIK9rmI3xfMPzIE/preview" width="738" height="50" allow="autoplay"></iframe>
        </div>

        <div >
          <span style={{ marginLeft: '200px', marginRight: '200px', backgroundColor: '#230871', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fourth-text'>Audio: Touched by Box Project</span>
          <iframe src="https://drive.google.com/file/d/1oasWiBO88otq3XAr1iuCfIaVammYELCA/preview" width="738" height="50" allow="autoplay"></iframe>
        </div>

        <div >
          <img src={AboutIMG8} style={{ width: '738px', marginTop: '25px', marginBottom: '25px' }} alt="JonestownBPCenter" />
        </div>

        <span className='ari-content' style={{ textAlign: 'center' }}>
          Linda McGrew -
          Jonestown Life Center Coordinator
          <br></br>But God Ministries
          Box Project Referral Agency in Jonestown, MS
        </span>


      </div>
    </div>
  );
};

export default About;