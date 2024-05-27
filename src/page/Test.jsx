import React, { useState } from "react";
import styled from "styled-components";

export default function Test() {
  return (
    <>
      <TextArea
        type="text"
        onMouseUp={(e) => {
          console.log(e);
          console.log(window.getSelection().toString());
        }}
      />
    </>
  );
}

const TextArea = styled.input`
  width: 300px;
  height: 200px;
  border: 1px solid red;
`;
