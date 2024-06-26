import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getNote, deleteNote } from "../api/noteService";
import Image from "../components/Image";
import ModalImage from "../components/modal/ModalImage";
import Tags from "../components/Tags";
import IcRemove from "../img/ic_remove (1).svg";

export default function Note() {
    const navigate = useNavigate();
    const { noteId } = useParams();

    const [note, setNote] = useState();
    useEffect(() => {
        getNote(noteId)
            .then((res) => {
                if (!res.success) {
                    alert("문제가 발생했습니다. " + res.message);
                    return;
                }

                const note = res.result;
                setNote(note);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [noteId]);

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
        setShowImg();
    }

    // 노트 삭제 API
    function delNote() {
        deleteNote(noteId).then((resp) => {
            alert(resp.message);

            if (resp.success) {
                navigate("/my");
                return;
            }
        });
    }

    return (
        <>
            <Wrapper>
                {note != null && (
                    <>
                        <Top>
                            <DateText>{note.date}</DateText>
                            <Tags tags={note.tags} />
                            <DeleteImg src={IcRemove} onClick={delNote} />
                        </Top>

                        <Body>
                            <TextBox>
                                <Input> {note.content}</Input>
                            </TextBox>
                            <ImageBox>
                                {note.imageMetaDataList.map((item, idx) => {
                                    return (
                                        <Image
                                            item={item}
                                            key={idx}
                                            showImgModal={showImgModal}
                                        />
                                    );
                                })}
                            </ImageBox>
                        </Body>
                    </>
                )}
            </Wrapper>
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
    margin-bottom: 20px;
    padding: 0 50px;

    overflow-y: hidden;
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

const DeleteImg = styled.img`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 24px;
    cursor: pointer;
`;

const Body = styled.div`
    width: 100%;
    height: 90%;
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
    height: 100%;

    @media screen and (max-width: 1030px) {
        flex: 5;
    }
`;

const ImageBox = styled.div`
    flex: 2;
    margin-left: 20px;
    height: 100%;

    overflow-y: scroll;
    padding-right: 10px;
    margin-bottom: 10px;

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
        margin: 0;
        margin: 10px 0 0 0;
        flex: 5;

        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;

const Input = styled.div`
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
