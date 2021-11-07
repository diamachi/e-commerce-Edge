import React from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Adver from "./Ad";

function Home() {
    return (
        <div class="adver_side_chat">
            <Adver class="adver">
            </Adver>
            <Sidebar class="sidebar">              
            </Sidebar>
            <Chat class="chat"></Chat>
        </div>
    )
}

export default Home;
