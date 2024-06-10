import React from "react";
import styled from "styled-components";
import BackgroundImage from "../img/background.svg";
import IOSys from "../img/IOS_김유신.svg";
import IOSsh from "../img/IOS_정세호.svg";
import IOSjh from "../img/IOS_신재형.svg";
import IOSdw from "../img/IOS_신동원.svg";

export default function Teams() {
    return (
        <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <Wrapper>
                <TextBold>Teams</TextBold>
                <Body>
                    <UserBox>
                        <div className="flip">
                            <div className="card">
                                <UserImg className="front" src={IOSys} />
                                <UserInfo
                                    className="back"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/yusiny",
                                            "_blank"
                                        )
                                    }
                                >
                                    Frontend <br /> Developer
                                </UserInfo>
                            </div>
                        </div>
                        <UserName>Yooshin Kim</UserName>
                        <UserEmail>yusinkim.or@gmail.com</UserEmail>
                    </UserBox>
                    <UserBox>
                        <div className="flip">
                            <div className="card">
                                <UserImg className="front" src={IOSjh} />
                                <UserInfo
                                    className="back"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/shinplest",
                                            "_blank"
                                        )
                                    }
                                >
                                    Frontend <br /> Developer
                                </UserInfo>
                            </div>
                        </div>
                        <UserName>Jaihyoung Shin</UserName>
                        <UserEmail>shinplest@gmail.com</UserEmail>
                    </UserBox>
                    <UserBox>
                        <div className="flip">
                            <div className="card">
                                <UserImg className="front" src={IOSsh} />
                                <UserInfo
                                    className="back"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/JeongSH1",
                                            "_blank"
                                        )
                                    }
                                >
                                    Backend <br /> Developer
                                </UserInfo>
                            </div>
                        </div>
                        <UserName>Seho Jeong</UserName>
                        <UserEmail>jyt001532@gmail.com</UserEmail>
                    </UserBox>
                    <UserBox>
                        <div className="flip">
                            <div className="card">
                                <UserImg className="front" src={IOSdw} />
                                <UserInfo
                                    className="back"
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/edv-Shin",
                                            "_blank"
                                        )
                                    }
                                >
                                    Backend <br /> Developer
                                </UserInfo>
                            </div>
                        </div>
                        <UserName>Dongwon Shin</UserName>
                        <UserEmail>edvedv613@gmail.com</UserEmail>
                    </UserBox>
                </Body>
            </Wrapper>
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
    height: 100%;
    padding: 0 50px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    color: #2b234a;
`;

const TextBold = styled.div`
    font-family: "NotoSans-Bold";
    font-size: 58px;
    color: #2b234a;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 60%;
    margin-top: 30px;
`;

const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: calc(100% / 4);
    height: 100%;
    color: #2b234a;
`;

const UserImg = styled.img`
    width: 130px;
    height: 130px;
    background: #ffffff;
    box-shadow: 0px 3px 3px 0.5px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
`;

const UserInfo = styled.div`
    width: 140px;
    height: 140px;
    background: #2b234a;

    font-family: "NotoSans-Bold";
    font-size: 19px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: 0px 3px 3px 0.5px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    cursor: pointer;
`;

const UserName = styled.div`
    margin-top: 30px;
    font-family: "NotoSans-Bold";
    font-size: 24px;
`;

const UserEmail = styled.div`
    font-family: "NotoSans-Regular";
    font-size: 14px;
`;
