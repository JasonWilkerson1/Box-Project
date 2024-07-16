import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopLink from './pages/ScrollToTopLink';
import './Header.css';
import boxProjectImage from './BoxProject.jpg';


function Header() {
  // Define state variables and functions for dropdown visibility
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [resourcesDropdownVisible, setResourcesDropdownVisible] = useState(false);

  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("isAdmin"));

  // useEffect to update isAdmin state when sessionStorage changes
  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("isAdmin"));
  }, []);

  return (
    <header className="navbar" style={{ position: 'fixed' }}>
      <div className="logo">
      <ScrollToTopLink to="/">
          <img
            src={boxProjectImage}
            alt="BoxProject Logo"
            style={{ width: '125px', height: '100px' }}
          />
        </ScrollToTopLink></div>
      <nav>
        <ul className="nav-list">
          <li>
          <ScrollToTopLink to="/about"
              onMouseEnter={() => setAboutDropdownVisible(true)}
              onMouseLeave={() => setAboutDropdownVisible(true)}
            >
              About
            </ScrollToTopLink>
            {/* Dropdown for "About" */}
            {aboutDropdownVisible && (
              <div className="dropdown-content">
                <ScrollToTopLink to="/our-story">Our Story</ScrollToTopLink>
                <ScrollToTopLink to="/our-history">Our History</ScrollToTopLink>
                <ScrollToTopLink to="/our-impact">Our Impact</ScrollToTopLink>
              </div>
            )}
          </li>
          <li>
            <ScrollToTopLink to="/get-involved">Get Involved</ScrollToTopLink>
          </li>
          <li className="centered">
            <ScrollToTopLink to="/news">News</ScrollToTopLink>
          </li>
          <li>
            <ScrollToTopLink
              to="/resources"
              onMouseEnter={() => setResourcesDropdownVisible(true)}
              onMouseLeave={() => setResourcesDropdownVisible(true)}
            >
              Resources
            </ScrollToTopLink>
            {/* Dropdown for "Resources" */}
            {resourcesDropdownVisible && (
              <div className="dropdown-content">
                <ScrollToTopLink to="/sponsor-info">View Sponsor Info</ScrollToTopLink>
                <ScrollToTopLink to="/recipient-info">View Recipient Info</ScrollToTopLink>
                {isAdmin ? (
                  <>
                    <ScrollToTopLink to="/create-admin-recipient">Create Admin/Recipient</ScrollToTopLink>

                    <ScrollToTopLink to="/list-recipient-info">List Recipient Info</ScrollToTopLink>
                  </>
                ) : (
                  <ScrollToTopLink to="/become-a-recipient">Become a Recipient</ScrollToTopLink>
                )}
              </div>
            )}
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="donate-button">
          <a
              href="https://www.jotform.com/2351044084" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              Donate
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;