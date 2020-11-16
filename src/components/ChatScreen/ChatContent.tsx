import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GiftCard from "@material-ui/icons/CardGiftcard";
import Gif from "@material-ui/icons/Gif";
import Emoji from "@material-ui/icons/EmojiEmotions";

function ChatContentInput() {
  return (
    <ChatContentInputDiv>
      <AddCircleIcon fontSize="large" />
      <form>
        <input type="text" placeholder="Message" />
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
  }

  & > form > button {
    display: none;
  }

  & .Chat_inputIcons > svg {
    padding: 5px;
  }
`;

export default ChatContentInput;
