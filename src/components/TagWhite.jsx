import React from "react";
import styled from "styled-components";

export default function TagWhite(props) {
  return <Containter>#{props.tag}</Containter>;
}

const Containter = styled.div`
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 50px;

  min-width: 60px;
  height: 100%;
  padding: 0 5px;

  text-align: center;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  line-height: 2;

  margin-right: 5px;

  &::selection {
    background-color: none;
  }
`;
