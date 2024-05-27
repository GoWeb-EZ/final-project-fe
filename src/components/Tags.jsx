import React, { useState } from "react";
import styled from "styled-components";
import ImageRemove from "../img/ic_remove.svg";
import ImageAdd from "../img/ic_add.svg";

export default function Tags(props) {
  const tagList = props.tags;

  return (
    <Wrapper>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <Text>#{tagItem}</Text>
            </TagItem>
          );
        })}
      </TagBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - (160px));
  overflow-x: scroll;

  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 20px;
  padding: 5px 0;
`;

const TagItem = styled.div`
  height: 100%;
  padding: 5px 10px;

  background: #2b234a;
  border-radius: 50px;

  margin-right: 5px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: "NotoSans-Regular";

  font-size: 14px;
  color: #fff;
  white-space: nowrap;
`;
