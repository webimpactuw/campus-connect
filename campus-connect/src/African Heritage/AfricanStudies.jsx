import React from 'react'
import '../styles/RSO.css';
import img2 from '../img/AfricanStudies.png';
import website from '../img/social4.png';
import insta from '../img/insta.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const AfricanStudies = () => {
  return (
    <div className="page-container">
      <div className="inner-box">
        <div className="left-box">
          <div className="title">
          <img src={img2} alt="Logo" className="img2" /> {/* Logo image */}
          <h1>Students African Studies Association</h1>
          </div>
          <div className="description">
          <h3>Our association serves as a link between students’ educational interests and the African Studies Program’s current and potential offerings in classes, events, and employment opportunities. SASA events will bring professors, educators, organizations to present their field of study or initiative within the African continent: North, East, South, West. Topics presented or discussed will include subjects that will connect each school/college’s discipline to African Studies at the UW. </h3>
          </div>
        </div>
        <div className="line"></div> {/* Line between left and right boxes */}
        <div className="right-box">
          <h3>Contact Information</h3>
          <p>Contact Email: sasanow@uw.edu</p>
          <div className="contact1">
            <a>
              <img src= {website} alt="website" className="socials" />
            </a>
            <a>
              <img src= {insta} alt="insta" className="socials" />
            </a>
          </div>
          <div className="contact2">
          <a>
              <img src= {facebook} alt="facebook" className="socials" />
            </a>
            <a>
              <img src= {linkedin} alt="linkedin" className="socials" />
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default AfricanStudies