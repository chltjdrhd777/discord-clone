import SideBar from "./components/Sidebar/SideBar";
import React from "react";
import Chat from "components/ChatScreen/Chat";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
