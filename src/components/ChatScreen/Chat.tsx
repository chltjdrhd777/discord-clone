import React from "react";
import styled from "styled-components";
import ChatContentInput from "./ChatContent";
import ChatHeader from "./ChatHeader";
import MessageCont from "./MessagesCont";

function Chat() {
  return (
    <ChatDiv>
      <ChatHeader />

      <MessageCont />

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
