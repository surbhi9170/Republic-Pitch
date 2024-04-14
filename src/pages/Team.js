import React from 'react';
import './team.css'; // Import the CSS file

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-heading mb-4">Peak Ski Company Team</h1>
      <div className="team-members mt-4">
        <div className="team-member">
          <img src="./images/ceo.png" alt="Andy Wirth" className="profile-pic" />
          <h3>Andy Wirth</h3>
          <p>Co-Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="./images/ceo.png" alt="Bode Miller" className="profile-pic" />
          <h3>Bode Miller</h3>
          <p>Co-Founder & CIO</p>
        </div>
        <div className="team-member">
          <img src="./images/ceo.png" alt="Tracy Chang" className="profile-pic" />
          <h3>Tracy Chang</h3>
          <p>CMO</p>
        </div>
        <div className="team-member">
          <img src="./images/ceo.png" alt="Mark Danemann" className="profile-pic" />
          <h3>Mark Danemann</h3>
          <p>COO</p>
        </div>
        <div className="team-member">
          <img src="./images/ceo.png" alt="Darrin Haugen" className="profile-pic" />
          <h3>Darrin Haugen</h3>
          <p>Chief Product Officer</p>
        </div>
        <div className="team-member">
          <img src="./images/ceo.png" alt="Becca Huyard" className="profile-pic" />
          <h3>Becca Huyard</h3>
          <p>VP Accounting & Finance</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
