import React, { useRef, useState } from "react";
import styled from "styled-components";
import CustomTags from "../components/CustomTags";
import IcSave from "../img/ic_saveP.svg";
import ImageEditable from "../components/ImageEditable";
import ModalImage from "../components/ModalImage";
import ModalResult from "../components/ModalResult";
import { useRecoilValue } from "recoil";
import { userState } from "../atom/User";
import { saveNote } from "../api/noteService";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();

  // (1) Date, NoteId 받아오기
  const date = new Date().toISOString().substr(0, 10).replace("T", " ");

  // (2) Drag Text
  const [text, setText] = useState("");
  const onDragged = () => {
    const text = window.getSelection().toString();
    if (text.length <= 0) return;

    setText(text);
  };

  // (3) Save
  const [tags, setTags] = useState([]);
  const contentRef = useRef();
  const user = useRecoilValue(userState);
  function getTags(tagList) {
    setTags(tagList);
  }

  const save = () => {
    // userId, noteId, date, contents, tags, images(img, text)
    const note = {
      userID: user.userID,
      date: date,
      tags: tags,
      content: contentRef.current.value,
      images: imageList,
    };

    saveNote(note).then((resp) => {
      console.log("write - " + resp.data);
      navigate("/my");
    });
  };

  // Modal(Editable)
  const [showModal, setShowModal] = useState(false);
  const convert = () => {
    if (text.length <= 0) {
      alert("Text must be more than 1 word");
      return;
    }

    setShowModal(true);
  };

  // Modal(Image)
  const [showImg, setShowImg] = useState();

  // Modal -> Show Image Modal
  function showImgModal(text, img) {
    const data = {
      text: text,
      img: img,
    };
    setShowImg(data);
  }

  // Modal -> Close modal
  function closeModal() {
    setShowModal(false);
    setShowImg();
  }

  // Modal -> Add, Delete images
  const [imageList, setImageList] = useState([]);
  function addImage(text, img) {
    const data = {
      text: text,
      img: img,
    };
    const newImageList = [...imageList];
    newImageList.push(data);

    setText("");
    setImageList(newImageList);
  }

  function deleteImage(idx) {
    const newImageList = [...imageList];
    newImageList.splice(idx, 1);
    setImageList(newImageList);
  }

  return (
    <>
      <Wrapper id="here">
        <Top>
          <DateText>{date}</DateText>
          <CustomTags getTags={getTags} />
          <SaveBox onClick={save}>
            save
            <img src={IcSave} style={{ width: "18px", margin: "5px 2px" }} />
          </SaveBox>
        </Top>

        <Body>
          <TextBox>
            <Input
              type="text"
              ref={contentRef}
              placeholder="Write note..."
              onMouseUp={() => onDragged()}
            />
            <Text>
              <InputText>{text}</InputText>
              <ButtonP onClick={convert}>CONVERT</ButtonP>
            </Text>
          </TextBox>
          <ImageBox>
            {imageList.map((data, idx) => {
              console.log(data);
              return (
                <ImageEditable
                  key={idx}
                  idx={idx}
                  img={data.img}
                  text={data.text}
                  deleteImage={deleteImage}
                  showImgModal={showImgModal}
                />
              );
            })}
          </ImageBox>
        </Body>
      </Wrapper>

      {showModal && (
        <ModalResult text={text} closeModal={closeModal} addImage={addImage} />
      )}
      {showImg != null && (
        <ModalImage
          text={showImg.text}
          img={showImg.img}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  height: calc(100vh - 100px);

  margin: 0 auto;
  padding: 0 50px 20px 50px;

  overflow-y: hidden;
  overflow-x: hidden;
`;

const Top = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const DateText = styled.div`
  width: 90px;
  font-family: "NotoSans-Semibold";
  font-size: 14px;
`;

const SaveBox = styled.div`
  width: 50px;
  height: 100%;

  font-family: "NotoSans-Semibold";
  font-size: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    height: 100%;
  }
`;

const TextBox = styled.div`
  flex: 8;

  @media screen and (max-width: 1030px) {
    flex: 6;
  }
`;

const ImageBox = styled.div`
  flex: 2;
  margin-left: 20px;

  overflow-y: scroll;
  padding-right: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: #ececec;
    border-radius: 20px;
  }

  @media screen and (max-width: 1030px) {
    width: 100%;
    height: 180px;

    margin: 0;
    margin: 10px 0 0 0;
    flex: 4;

    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const Input = styled.textarea`
  width: 100%;
  height: 85%;

  border: 2px dashed #2b234a;
  border-radius: 10px;
  box-sizing: border-box;

  margin-bottom: 10px;
  padding: 20px;

  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #2b234a;
  resize: none;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    color: lightgray;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  padding: 0 20px;
  box-sizing: border-box;

  border: 2px solid #2b234a;
  border-radius: 10px;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1030px) {
    height: 15%;
  }
`;

const InputText = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 18px;
  color: #2b234a;
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
