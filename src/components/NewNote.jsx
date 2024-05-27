import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageMemo from "../img/ic_memo.svg";

export default function NewNote() {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/write");
      }}
    >
      <Text>Make new note ☺</Text>
      <Image src={ImageMemo} />
    </Container>
  );
}

const Container = styled.div`
  width: calc((100% - 16px) / 4);
  height: 200px;
  margin: 2px;
  padding: 20px;

  background-color: white;
  border: 2px dashed #2b234a;
  border-radius: 20px;

  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 930px) {
    width: calc((100% - 16px) / 3);
  }
  @media screen and (max-width: 700px) {
    width: calc((100% - 16px) / 2);
  }
`;

const Text = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 18px;
  color: #2b234a;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 0;
  bottom: 0;

  margin: 15px;
`;
