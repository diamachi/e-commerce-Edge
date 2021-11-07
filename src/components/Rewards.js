import React from "react";
import "./Rewards.css";
import pic from "./peeyush.png";

function Rewards() {
  return (
      <div className="profile bg">
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src={pic} alt="" />
          </div>
          <div className="name">Peeyush Yadav</div>
          <div className="desc">Hemllooooooo!</div>
          <div className="sm">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-whatsapp"></a>
            <a href="#" className="fab fa-twitter"></a>
          </div>
          <a href="#" className="contact-btn">
            Change profile
          </a>
        </div>
        <div className="card-footer">
          <div className="numbers">
            <div className="item">
              <span>120</span> Posts
            </div>
            <div className="item">
              <span>69</span> Answered
            </div>
            <div className="item">
              <span>127</span> Points
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Rewards;
