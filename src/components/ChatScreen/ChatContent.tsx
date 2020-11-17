import React, { useState } from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Gif from "@material-ui/icons/Gif";
import Emoji from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectApp } from "../../redux/mainReducer";
import db from "../../firebase";
import firebase from "firebase";

function ChatContentInput() {
  const ChannelCheck = useSelector(selectApp).selectedChannelInfo;

  const [input, setInput] = useState("");
  const inputTextFunc = (e: any) => {
    setInput(e.target.value);
  };

  const submitHandleFunc = (e: any) => {
    e.preventDefault();
    db.collection("channels")
      .doc(ChannelCheck?.channelId)
      .collection("messages")
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
  };

  return (
    <ChatContentInputDiv>
      <AddCircleIcon fontSize="large" />
      <form onSubmit={submitHandleFunc}>
        <input
          type="text"
          placeholder={`Message #${ChannelCheck?.channelId}`}
          value={input}
          onChange={inputTextFunc}
          disabled={!ChannelCheck}
        />
        <button type="submit">Send message</button>
      </form>

      <div className="Chat_inputIcons">
        <GiftCard fontSize="large" />
        <Gif fontSize="large" />
        <Emoji fontSize="large" />
      </div>
    </ChatContentInputDiv>
  );
}

const ChatContentInputDiv = styled.div`
  color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #474b53;
  border-radius: 5px;
  margin: 20px;
  border-top: 1px solid gray;

  & > form {
    flex: 1;
  }

  & > form > input {
    padding: 15px;
    background: transparent;
    color: wihte;
    font-size: large;
    width: 100%;
    color: white;
  }

  & > form > button {
    display: none;
  }

  & .Chat_inputIcons > svg {
    padding: 5px;
  }
`;

export default ChatContentInput;
