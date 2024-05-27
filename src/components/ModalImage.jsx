import React from "react";
import styled from "styled-components";
import ImageRemove from "../img/ic_close_primary.svg";

export default function ModalImage(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <Background onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ImageWrapper>
          <Img src={props.img} />
        </ImageWrapper>
        <Text>{props.text}</Text>

        <CloseButton src={ImageRemove} onClick={closeModal} />
      </Modal>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  border-radius: 20px;
  z-index: 20;

  padding: 20px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: 60%;

  border: 2px solid #2b234a;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Text = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 22px;
  color: #2b234a;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;
