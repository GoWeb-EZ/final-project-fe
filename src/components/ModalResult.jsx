import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageRetry from "../img/ic_retry.svg";
import ImageSave from "../img/ic_save.svg";
import ImageRemove from "../img/ic_close_primary.svg";
import IcLoading from "../img/ic_loading.svg";
import { convertImg } from "../api/imageService";

export default function ModalResult(props) {
  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    convert(props.text);
  }, []);

  // Props functions
  function closeModal() {
    props.closeModal();
  }

  function save(img) {
    if (img == undefined) {
      alert("You can save it after the conversion is over!");
      return;
    }

    props.addImage(props.text, img);
    closeModal();
  }

  const convert = (text) => {
    setImg();
    setIsLoading(true);

    convertImg(text)
      .then((img) => {
        setImg(img);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Background onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ImageWrapper>
          {img != null && <Img src={img} />}

          {isLoading && <LoadingBar src={IcLoading} />}
        </ImageWrapper>
        <Text>{props.text}</Text>
        <ButtonWrapper>
          <Button src={ImageRetry} onClick={() => convert(props.text)} />
          <Button src={ImageSave} onClick={() => save(img)} />
        </ButtonWrapper>

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

  overflow-x: hidden;

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
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: relative;
`;

const ImageWrapper = styled.div`
  width: 80%;
  height: 60%;

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
  font-family: "NotoSans-Regular";
  font-size: 22px;
  color: #2b234a;
`;

const ButtonWrapper = styled.div``;

const Button = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 30px;
  cursor: pointer;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;

const LoadingBar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
