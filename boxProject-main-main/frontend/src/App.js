import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Landing from './landing';
import LandingTwo from './landingTwo';

import ImageCarousel from './ImageCarousel';
import About from './pages/about';
import News from './pages/news';
import GetInvolved from './pages/involved';
import Resources from './pages/resources';
import Donate from './pages/donate';
import RecipientInfo from './pages/RecipientInfo';
import SponsorInfo from './pages/SponsorInfo';

import MyLogin from './LoginPage/ThisLogin';
import Recipient from './pages/reciepients';
import History from './pages/ourHistory';
import Impact from './pages/ourImpact';
import Story from './pages/ourStory';
import Agency from './pages/recipientChart';
import Sponsor from './pages/adminRecipientAdd';
import RecipientCode from './pages/recipientCodeGeneration';
import RecipientForm from './pages/recipientForm'
import Forgot from './LoginPage/ForgotPassword';

import CNFM from './cnfm.png';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/DonateToBoxProject" element={<Donate />} />
            <Route path="/pair-recipient-sponsors" element={<Recipient />} />
            <Route path="/our-History" element={<History />} />
            <Route path="/our-impact" element={<Impact />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/list-recipient-info" element={<Agency />} />
            <Route path="/create-admin-recipient" element={<Sponsor />} />
            <Route path="/become-a-recipient" element={<RecipientCode />} />
            <Route path="/fill-information" element={<RecipientForm />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/recipient-info" element={<RecipientInfo />} />
            <Route path="/sponsor-info" element={<SponsorInfo />} />
            <Route
              path="/"
              element={
                <div>
                  <Landing />
                  <ImageCarousel />
                  <LandingTwo/>
                  <body >
                    <div>
                      <h1 className="body-header">We Need Your Help!</h1>
                      <p className="body-content">Without YOUR direct participation in our program, achieving this goal would be nearly impossible.
                        <br></br>With your help, more and more families living in rural poverty can have the opportunity to improve their lives.
                        <br></br>Each family touched by the Box Project is one step closer to breaking the cycle of generational poverty in the MS Delta.
                      </p>
                      <ul style={{ textAlign: 'center', listStyleType: 'none', fontSize: '20px' }}>
                        <li>Interested in getting involved?</li>
                        <li>Read more about our Membership Agreement
                          <a href="https://boxproject.org/wp-content/uploads/2017/06/Recipient-Agreement-rev-032016-watermark.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}> here</a></li>
                        <li>AND <a href="https://form.jotform.com/62414377611150"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}>Sponsor a family now!</a></li>
                      </ul>
                    </div>
                    <div className="body-section-container">
                      <h1 className="body-header">CNFM Partnership</h1>
                      <p className="body-content">The Box Project is a program of the Community Foundation of Northwest Mississippi, an accredited foundation <br></br>with the Council on Foundations’
                        National Standards for U.S. Community Foundations. It is governed by the Community Foundation’s Board of Directors. We encourage you to investigate before you donate.
                        Click <a href="https://cfnm.org/about-us/financial-statements/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}> here </a>
                        to read more about the Community Foundation and its finances.
                        Click <a href="https://cfnm.org/programs/the-box-project/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none' }}> here </a>
                        for more information about the Box Project and its relationship to the Community Foundation of Northwest Mississippi.
                      </p>
                    </div>
                    <img className="CNFM-logo" src={CNFM} />
                  </body>
                </div>
              }
            />
            <Route path="/login" element={<MyLogin />} /> {/* Route for the login page */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;