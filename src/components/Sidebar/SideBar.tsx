import React from "react";
import styled from "styled-components";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import ChannelList from "./ChannelList";
import SignalIcon from "@material-ui/icons/SignalCellularAlt";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadSet from "@material-ui/icons/Headset";
import Setting from "@material-ui/icons/Settings";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectApp } from "../../redux/mainReducer";
import db, { auth } from "../../firebase";
import { useEffect } from "react";
import { setChannelList } from "redux/Slices/appSlice";

function SideBar() {
  const userInfo = useSelector(selectUser).userInfo;
  const chatList = useSelector(selectApp).channelInfo;
  const dispatch = useDispatch();

  const handleChannelFunc = () => {
    const channelName = prompt("Enter user name");

    if (channelName) {
      db.collection("channels").add({
        channelName,
      });
    }
  };

  useEffect(() => {
    db.collection("channels").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({
        channelId: doc.id,
        ...doc.data(),
      }));
      dispatch(setChannelList(data));
    });
  }, [dispatch]);

  return (
    <SidebarDiv>
      <div className="sidebar_top">
        <h3>PsuedoCord</h3>
        <ExpandMore />
      </div>

      <div className="sidebar_channels">
        <div className="channel_header">
          <div className="header_contents">
            <ExpandMore />
            <h4>Channels</h4>
          </div>

          <AddIcon
            className="sidebarHeader_AddIcon"
            onClick={handleChannelFunc}
          />
        </div>

        <div className="sidebar_list">
          {chatList?.map((chat) => (
            <ChannelList
              key={chat.channelId}
              channelName={chat.channelName}
              channelId={chat.channelId}
            />
          ))}
        </div>
      </div>

      <div className="voice_connect">
        <SignalIcon className="signal_icon" fontSize="large" />
        <div className="voice_state">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="voice_icons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar_profile">
        <Avatar
          src={userInfo?.photo ? userInfo.photo : ""}
          onClick={() => {
            auth.signOut();
          }}
        />

        <div className="profile_Info">
          <h3>{userInfo?.displayName}</h3>
          <p>
            {userInfo!.uid!.length > 5
              ? `${userInfo?.uid?.substring(0, 5)}...`
              : userInfo?.uid}
          </p>
        </div>

        <div className="profile_icons">
          <MicIcon />
          <HeadSet />
          <Setting />
        </div>
      </div>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  background-color: #2f3135;
  height: 100vh;

  & .sidebar_top {
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    color: white;
    border-bottom: 3px solid #26282c;
  }

  & .sidebar_channels {
    flex: 1;

    & .channel_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #2f3135;
      color: gray;

      & .header_contents {
        display: flex;
        align-items: center;
      }

      & .sidebarHeader_AddIcon {
        cursor: pointer;

        &:hover {
          color: white;
        }
      }
    }

    &.sidebar_list {
    }
  }

  & .voice_connect,
  .sidebar_profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    background-color: #2f3135;
    padding: 10px;
    border-top: 1px solid gray;

    //voice part
    & .signal_icon {
      color: #4fb185;
    }
    & .voice_state {
      flex: 1;
      padding: 10px;

      & > h3 {
        color: #4fb185;
      }

      & > p {
        font-size: smaller;
      }
    }

    & .voice_icons {
      & > svg {
        padding: 10px;
      }
    }

    // profile part

    & .profile_Info {
      flex: 1;
      padding: 10px;

      & > h3 {
        color: white;
      }
    }

    & .profile_icons > svg {
      padding: 10px;
    }
  }
`;

export default SideBar;
