import React from 'react';
import "./ChatHeader.css";

function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
              <h3>
                  <span className="chatHeader_hash">
                  #
                 </span>
                {channelName}
              </h3>
            </div>

        <div className="chatHeader_right">
        {/* <NotificationsIcon/>
        <EditLocationRoundedIcon/> */}
        {/* <div className="chatHeader_search">
            <input placeholder="Search"/>
            <SearchRoundedIcon/>
        </div> */}
    {/* <SendRoundedIcon/> */}
    
        </div>
        </div>
    );
}

export default ChatHeader;
