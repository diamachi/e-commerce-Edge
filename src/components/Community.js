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
        <SideCard />
        <SideCard />
        <SideCard />
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
