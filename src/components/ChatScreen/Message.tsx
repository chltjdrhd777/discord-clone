import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <MessageDiv>
      <Avatar />

      <div className="message_info">
        <h4>
          test<span className="message_timestamp">test stamp</span>
        </h4>

        <p>this is test message</p>
      </div>
    </MessageDiv>
  );
}

const MessageDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  color: white;

  & .message_info {
    margin-left: 20px;

    & .message_timestamp {
      color: gray;
      margin-left: 20px;
      font-size: smaller;
    }
  }
`;

export default Message;
