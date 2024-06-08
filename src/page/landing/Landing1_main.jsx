import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "../../img/MainImage.svg";
import BackgroundImage from "../../img/background.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../atom/User";
import {
    checkIsInViewport,
    useWindowScrollListener,
} from "../../utils/WindowScroll";
import { useInterval } from "../../utils/UseInterval";

export default function Landing1() {
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    function getStart() {
        if (user == null) {
            alert("로그인 후 이용 가능합니다!");

            // googleLogin().then((data) => {
            //   const req = {
            //     userName: data.user.displayName,
            //     userEmail: data.user.email,
            //   };

            //   login(req).then((user) => {
            //     const userJson = JSON.stringify(user);
            //     localStorage.setItem("user", userJson);
            //     setUser(user);
            //   });
            // });

            return;
        }

        navigate("/my");
    }

    // Animtaion: Fade-in
    const viewRef = useRef();
    useEffect(() => {
        runAnimation();
    }, [viewRef.current === undefined]);

    useWindowScrollListener(() => {
        runAnimation();
    });

    const [show, setShow] = useState(false);
    function runAnimation() {
        if (checkIsInViewport(viewRef.current)) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    // 캐치프레이즈
    const [slogan, setSlogan] = useState(true);

    useInterval(() => {
        setSlogan(!slogan);
    }, 5000);

    return (
        <Background
            style={{ backgroundImage: `url(${BackgroundImage})` }}
            ref={viewRef}
        >
            {show && (
                <Wrapper>
                    <TextWrapper>
                        {slogan && (
                            <>
                                <TextBold className="fade-inout">
                                    Transform
                                </TextBold>
                                <TextNormal className="fade-inout">
                                    the way you take notes,
                                    <br /> the way you learn
                                </TextNormal>
                            </>
                        )}
                        {!slogan && (
                            <>
                                <TextBold className="fade-inout">
                                    Unlock
                                </TextBold>
                                <TextNormal className="fade-inout">
                                    the full potential of students
                                    <br /> with visual learning
                                </TextNormal>
                            </>
                        )}

                        <TextThin>
                            created by <u>ChatGPT</u>
                        </TextThin>
                        <Button onClick={getStart}>Get started</Button>
                    </TextWrapper>
                    <img src={Image} width={376} className="fade-in" />
                </Wrapper>
            )}
        </Background>
    );
}

const Background = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    background: no-repeat center;
    background-size: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    width: 1000px;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    color: #2b234a;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const TextBold = styled.div`
    font-family: "NotoSans-Bold";
    font-size: 58px;
`;

const TextNormal = styled.div`
    font-family: "NotoSans-Regular";
    font-size: 38px;
    margin-top: 5px;
`;

const TextThin = styled.div`
    font-family: "NotoSans-Light";
    font-size: 14px;
    margin-top: 10px;
`;

const Button = styled.div`
    margin-top: 50px;
    width: fit-content;
    border: 2px solid #2b234a;
    border-radius: 5px;
    font-family: "NotoSans-Bold";
    color: #2b234a;
    padding: 10px 20px;
    cursor: pointer;
    transition: ease-out 0.2s;

    &:hover {
        background-color: #2b234a;
        color: white;
        transition: ease-in 0.2s;
    }
`;
