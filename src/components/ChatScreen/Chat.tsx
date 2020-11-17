import React, { useState } from "react";
import styled from "styled-components";
import ChatContentInput from "./ChatContent";
import ChatHeader from "./ChatHeader";
import MessageCont from "./MessagesCont";
import { useSelector } from "react-redux";
import { selectApp } from "../../redux/mainReducer";

function Chat() {
  const selectedChannel = useSelector(selectApp).selectedChannelInfo;
  return (
    <ChatDiv>
      <ChatHeader />
      {selectedChannel ? <MessageCont /> : <div style={{ flex: 1 }}></div>}
      <ChatContentInput />
    </ChatDiv>
  );
}

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
  background-color: #363a3f;
`;

export default Chat;
