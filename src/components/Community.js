import React from "react";
import Order from "./Order";
import SideCard from "./SideCard";
import "./Community.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ForumLists } from "./ForumLists";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Community() {
  return (
    <div className="community-main">
      {/* <Order /> */}
      <div className="sidecards-section">
        <SideCard
          link="https://i.imgur.com/qCmRK0l.jpg"
          name="Men Black Analogue Watch BQ2365"
          price="Rs. 5995"
        />
        <SideCard
          link="https://i.imgur.com/meqPP9N.jpg"
          name="Sportswear Men Black Solid Loose Fit Tracksuit"
          price="Rs. 4245"
        />
        <SideCard
          link="https://i.imgur.com/XOn4lbL.jpg"
          name="AIR MAX OKETO Sneakers"
          price="Rs. 5995"
        />
      </div>
      <div className="forums-section">
        <p>
          View all community forums{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
        <div>
          <ForumLists />
        </div>
      </div>
    </div>
  );
}

export default Community;
