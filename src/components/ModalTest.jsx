import React, { useRef, useState } from "react";
import styled from "styled-components";
import { convertImg } from "../api/imageService";
import IcLoading from "../img/ic_loading.svg";

export default function ModalTest(props) {
  function closeModal() {
    props.closeModal();
  }

  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const input = useRef();
  function convert() {
    const text = input.current.value;
    if (text == null || text.length < 0) {
      alert("Input text must be entered");
      return;
    }

    setIsLoading(true);
    setImg();
    convertImg(text).then((img) => {
      console.log(img);

      setImg(img);
      setIsLoading(false);
    });
  }

  return (
    <Modal className={props.classes} onClick={closeModal}>
      <ImageWrapper onClick={(e) => e.stopPropagation()}>
        {img != null && <Img src={img} />}
        {isLoading && <LoadingBar src={IcLoading} />}
      </ImageWrapper>
      <Text onClick={(e) => e.stopPropagation()}>
        <InputText placeholder="Write text here" ref={input} />
        <ButtonP onClick={convert}>CONVERT</ButtonP>
      </Text>
    </Modal>
  );
}

const Modal = styled.div`
  width: 400px;
  height: 300px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  width: 95%;
  height: 70%;

  border: 2px solid #2b234a;
  border-radius: 10px;
  box-sizing: border-box;

  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const Text = styled.div`
  position: relative;
  width: 95%;
  height: 15%;
  padding: 0 20px;
  box-sizing: border-box;

  border: 2px solid #2b234a;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  width: calc(100% - 110px);
  border: none;
  font-family: "NotoSans-Regular";
  font-size: 18px;
  color: #2b234a;

  &:focus {
    outline: none;
  }
`;

const ButtonP = styled.div`
  width: 100px;
  height: 100%;

  background: #2b234a;
  border: 2px solid #2b234a;
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;

  font-family: "NotoSans-Bold";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  position: absolute;
  right: 0;

  cursor: pointer;
`;

const LoadingBar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
