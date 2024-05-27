import React, { useRef } from "react";
import styled from "styled-components";
import BackgroundImage from "../img/background.svg";
import IcSend from "../img/ic_send.svg";
import IcPhone from "../img/ic_phone.svg";
import IcEmail from "../img/ic_email.svg";
import IcGithub from "../img/ic_github.svg";
import Divider from "../img/ic_divider.svg";
import { sendContact } from "../api/userServics";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function send() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name == null || email == null || message == null) {
      alert("Every field must be filled!");
      return;
    }

    sendContact(name, email, message).then((res) => {
      alert("Send successfully!");
      window.location.reload();
    });
  }
  return (
    <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>Feel free to contact us anytime!</Desc>
        <InputBox>
          <Input placeholder="Name" ref={nameRef} />
          <Input placeholder="Email" ref={emailRef} />
          <Input placeholder="Message" ref={messageRef} />
        </InputBox>

        <Button onClick={send}>
          <img src={IcSend} style={{ width: "18px" }} /> &nbsp; Send
        </Button>

        <img src={Divider} style={{ marginTop: "80px", width: "1000px" }} />

        <InfoBox>
          <TextBold>Info</TextBold>
          <ContactBox>
            <ContactItem>
              <img src={IcPhone} style={{ width: "24px" }} />
              &nbsp; (949) 323-6178
            </ContactItem>
            <ContactItem>
              <img src={IcEmail} style={{ width: "24px" }} />
              &nbsp; doodling.tti@gmail.com
            </ContactItem>
            <ContactItem>
              <img src={IcGithub} style={{ width: "24px" }} />
              &nbsp; https://github.com/doodling-TTI/Doodling
            </ContactItem>
          </ContactBox>
        </InfoBox>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: no-repeat center;
  background-size: 100%;
  margin-top: 50px;
  margin-bottom: 50px;

  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 1000px;
  padding: 0 50px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
  color: #2b234a;
`;

const Title = styled.div`
  font-family: "NotoSans-Bold";
  font-size: 44px;
`;

const Desc = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 28px;
  margin-top: 10px;
`;

const InputBox = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Input = styled.input`
  border: 1px solid #2b234a;
  border-radius: 10px;

  font-family: "NotoSans-Regular";
  font-size: 18px;
  padding: 15px 30px;
  margin: 10px;

  &::placeholder {
    color: #8c86a2;
  }

  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;

  font-family: "NotoSans-Bold";
  font-size: 18px;
  color: #fff;

  background: #2b234a;
  border-radius: 10px;
  box-sizing: border-box;

  padding: 20px 30px;
  margin-top: 20px;

  cursor: pointer;
`;

// Info
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #2b234a;
  margin: 80px 0;
`;

const TextBold = styled.div`
  font-family: "NotoSans-Bold";
  font-size: 24px;
`;

const ContactBox = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "NotoSans-Meidum";
  font-size: 14px;
  color: #2b234a;
`;
