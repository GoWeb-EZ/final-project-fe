import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../img/logoWB.svg";
import BackgroundImage from "../../img/backgroundP.svg";
import ModalTest from "../../components/ModalTest";

export default function Landing3() {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState("");
  const [classesB, setClassesB] = useState("float");

  function showModal() {
    setClasses("fade-in");
    setShow(true);
    setClassesB("");
  }

  function closeModal() {
    setClasses("fade-out");
    setTimeout(() => {
      setShow(false);
      setClassesB("float");
    }, 1000);
  }

  return (
    <Background style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Wrapper>
        <TextWrapper>
          <LogoImg src={Image} />

          <TextThin>
            AI note-taking assistant service <br /> for dyslexia students
          </TextThin>
          <Button onClick={showModal} className={classesB}>
            Try now
          </Button>
        </TextWrapper>

        {show && <ModalTest classes={classes} closeModal={closeModal} />}
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  background: no-repeat center;
  background-size: 100%;
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

const LogoImg = styled.img`
  width: 400px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const TextThin = styled.div`
  font-family: "NotoSans-Light";
  font-size: 26px;
  margin-top: 10px;
  margin-left: 5px;
  color: #fff;
`;

const Button = styled.div`
  margin-top: 50px;
  margin-left: 5px;
  width: 100px;
  padding: 10px;

  border: 2px solid #fff;
  border-radius: 5px;
  font-family: "NotoSans-Bold";
  text-align: center;
  color: #fff;

  cursor: pointer;
  transition: ease-out 0.2s;

  &:hover {
    background-color: #fff;
    color: #2b234a;
    transition: ease-in 0.2s;
  }
`;
