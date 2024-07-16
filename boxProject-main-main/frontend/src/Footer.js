import React, { useState } from "react";
import "./footer-styles.css";
import youtubeLogo from './youtube-circle.png';
import twitterLogo from './twitter-icon.png';
import facebookLogo from './facebook-logo.png';
import instagramLogo from './instagram-logo.png';

export default function Footer() {
  return (
    <footer className="text-white text-center text-lg-start bg-black">
      <div className="container-fluid p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">
              <b>Contact Us</b>
            </h5>

            <p style={{ textAlign: 'left', color: 'white' }}>
              <b>Office Phone:</b> 1-662-449-5002 <br></br>
              <b>Toll Free Phone:</b> 1-800-268-9928 <br></br>
              <b>Fax:</b> 1-662-449-5006 <br></br>
              <b>E-mail Contact:</b> director@boxproject.org
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1">
              <b>Mailing Address</b>
            </h5>
            <div className="form-outline form-white mb-4">
              <p style={{ textAlign: 'left', color: 'white' }} className="form-label">
                The Box Project <br></br>
                C/O Community Foundation of Northwest <br></br>
                Mississippi 315 Losher Street, Suite 100 <br></br>
                Hernando, MS 38632
              </p>
            </div>
            <div className="mt-4 pt-3 sm-container">
              {/* <!-- Facebook --> */}
              <a
                href="https://www.facebook.com/TBP1962/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "55px", marginRight: "10px"}}
              >
                <img
                  src={facebookLogo}
                  alt="facebook logo white circle black f"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              {/* <!-- Twitter --> */}
              <a
                href="http://www.twitter.com/@TBP1962"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <img
                  src={twitterLogo}
                  alt="twitter logo white circle black bird"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              {/* <!-- Youtube --> */}
              <a
                href="https://www.youtube.com/channel/UCu-tEnjTcYvVlTRcvvCJw3g"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <img
                  src={youtubeLogo}
                  alt="youtube circle logo play button"
                  style={{ width: "41px", height: "41px" }}
                />
              </a>
              {/* <!-- Instagram --> */}
              <a
                href="https://www.instagram.com/tbp1962/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <img
                  src={instagramLogo}
                  alt="instagram round logo white bg black camera"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <div className="row"></div>
            <h5 className="text-uppercase mb-4">
              <b>Physical Address</b>
            </h5>
            <p style={{ textAlign: 'left', color: 'white' }}className="form-label">
              133 Sharkey Ave. <br></br>Clarksdale, MS 38614
            </p>

            <h5 className="text-uppercase mt-4 mb-2">
              <b>Office Hours</b>
            </h5>
            <p style={{ textAlign: 'left', color: 'white' }}>Monday – Friday 2:00 PM – 5:00 PM CST</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
