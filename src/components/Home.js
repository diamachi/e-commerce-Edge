import React from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Adver from "./Ad";

function Home() {
    return (
        <div class="adver_side_chat">
            <Adver class='sticky-top'>

            </Adver>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Home
