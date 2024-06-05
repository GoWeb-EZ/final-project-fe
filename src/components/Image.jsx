import React, { useState } from "react";
import styled from "styled-components";

export default function Image(props) {
    const [isHover, setIsHover] = useState(false);

    const image = `http://20.196.96.170:8080/api/image?file_name=${props.item.fileName}`;

    function showImgModal() {
        props.showImgModal(props.item.text, image);
    }

    return (
        <>
            <ImageBox
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <Img src={image} />

                {isHover && <Background onClick={showImgModal} />}
            </ImageBox>
        </>
    );
}

const ImageBox = styled.div`
    width: 180px;
    height: 180px;
    padding: 0;
    margin-bottom: 10px;

    border: 2px solid #2b234a;
    border-radius: 15px;
    box-sizing: border-box;

    position: relative;

    @media screen and (max-width: 1030px) {
        margin-bottom: 0;
        margin-right: 10px;
        flex-shrink: 0;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
`;

const Button = styled.img`
    width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
`;
