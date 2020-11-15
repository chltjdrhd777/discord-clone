import React from "react";
import styled from "styled-components";

interface ChannelProps {
  id?: string;
  channel?: string;
}

function ChannelList({ id, channel }: ChannelProps) {
  return (
    <ChannelListDiv>
      <h4>
        <span>#</span>
        {channel}
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
