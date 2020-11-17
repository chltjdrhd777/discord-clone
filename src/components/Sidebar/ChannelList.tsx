import React from "react";
import { useDispatch } from "react-redux";
import { ChatList, selectedChannelInfo } from "redux/Slices/appSlice";
import styled from "styled-components";

function ChannelList({ channelId, channelName }: ChatList) {
  const dispatch = useDispatch();
  const ChannelChangeFuc = () => {
    dispatch(selectedChannelInfo({ channelId, channelName }));
  };

  return (
    <ChannelListDiv onClick={ChannelChangeFuc}>
      <h4>
        <span>#</span>
        {channelName}
      </h4>
    </ChannelListDiv>
  );
}

const ChannelListDiv = styled.div`
  &:hover > h4 {
    color: white;
    background-color: #40464b;
  }

  & > h4 {
    display: flex;
    padding-left: 15px;
    align-items: center;
    background-color: #2f3135;
    color: gray;
    cursor: pointer;

    & > span {
      font-size: 30px;
      padding: 8px;
    }
  }
`;

export default ChannelList;
