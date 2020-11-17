import React, { useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectApp } from "../../redux/mainReducer";
import db from "../../firebase";

function MessagesCont() {
  const selectedChannel = useSelector(selectApp).selectedChannelInfo;

  const [messages, setMessages] = useState([] as any[]);

  useEffect(() => {
    if (selectedChannel?.channelId) {
      db.collection("channels")
        .doc(selectedChannel.channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) =>
          setMessages(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );
    }
  }, [selectedChannel]);

  return (
    <MessagesContDiv>
      {messages.map((message) => (
        <div key={message.id}>
          <MessageDiv>
            <Avatar />

            <div className="message_info">
              <h4>
                {selectedChannel?.channelName}
                <span className="message_timestamp">
                  {message && message.timestamp.toDate().toUTCString()}
                </span>
              </h4>

              <p>{message.message}</p>
            </div>
          </MessageDiv>
        </div>
      ))}
    </MessagesContDiv>
  );
}

const MessagesContDiv = styled.div`
  flex: 1;
`;

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

export default MessagesCont;
