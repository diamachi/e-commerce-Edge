import React from "react";
import Order from "./Order";
import SideCard from "./SideCard";
import "./Community.css";

function Community() {
  return (
    <div>
      {/* <Order /> */}
      <div className="sidecards-section">
        <SideCard link='https://i.imgur.com/YdAv1hS.jpg' name='Men Black Analogue Watch BQ2365' price='Rs. 5995' />
        <SideCard link='https://i.imgur.com/gl4kvxK.jpg' name='Sportswear Men Black Solid Loose Fit Tracksuit' price='Rs. 4245' />
        <SideCard link='https://i.imgur.com/NNlSjch.jpg' name='AIR MAX OKETO Sneakers' price='Rs. 5995' />
      </div>
    </div>
  );
}

export default Community;
