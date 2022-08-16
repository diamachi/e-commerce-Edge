import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";

function Sidebar() {
  const user = useSelector(selectUser);
  const [Channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3></h3>
        
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            
            <h5>Channels</h5>
          </div>
        </div>
        <div className="sidebar_channelsList">
          {Channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar_profile">
        <div className="sidebar_profileInfo">
          <h4>{user.displayName}</h4>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
