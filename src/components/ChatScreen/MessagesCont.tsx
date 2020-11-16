import React from "react";
import styled from "styled-components";
import Message from "./Message";

function MessagesCont() {
  return (
    <MessagesContDiv>
      <Message />
    </MessagesContDiv>
  );
}

const MessagesContDiv = styled.div`
  flex: 1;
`;

export default MessagesCont;
