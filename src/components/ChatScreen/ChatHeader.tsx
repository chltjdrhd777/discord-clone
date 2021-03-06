import React from "react";
import styled from "styled-components";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocation from "@material-ui/icons/EditLocationRounded";
import PeopleAltRounded from "@material-ui/icons/PeopleAltRounded";
import SearchRounded from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRounded from "@material-ui/icons/SendRounded";
import { useSelector } from "react-redux";
import { selectApp } from "../../redux/mainReducer";

function ChatHeader() {
  const selectedChannelInfo = useSelector(selectApp).selectedChannelInfo;
  return (
    <ChatHeaderDiv>
      <div className="ChatHeader_left">
        <h3>
          {selectedChannelInfo ? (
            <>
              <span className="Hash_Tag">#</span>
              {selectedChannelInfo?.channelName}
            </>
          ) : (
            ""
          )}
        </h3>
      </div>

      <div className="ChatHeader_right">
        <NotificationIcon />
        <EditLocation />
        <PeopleAltRounded />

        <div className="ChatHeader_searchBar">
          <input type="text" placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRoundedIcon />
      </div>
    </ChatHeaderDiv>
  );
}

const ChatHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  padding: 30px;

  & .ChatHeader_left > h3 {
    display: flex;
    align-items: center;
    color: white;

    & .Hash_Tag {
      margin-right: 10px;
      color: gray;
    }
  }

  & .ChatHeader_right {
    display: flex;
    align-items: center;
    flex: 0.5;
    justify-content: space-between;

    & > svg {
      padding: 5px;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }

    & .ChatHeader_searchBar {
      display: flex;
      align-items: center;
      color: gray;
      border-radius: 3px;
      padding: 3px;
      background-color: #2f3135;

      & > input {
        background-color: transparent;
        color: white;
      }
    }
  }
`;

export default ChatHeader;
