import React from "react";
import Order from "./Order";
import SideCard from "./SideCard";
import "./Community.css";

function Community() {
  return (
    <div>
      {/* <Order /> */}
      <div className="sidecards-section">
        <SideCard />
        <SideCard />
        <SideCard />
      </div>
    </div>
  );
}

export default Community;
