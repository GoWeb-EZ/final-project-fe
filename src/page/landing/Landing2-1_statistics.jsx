import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "../../img/visual_data.svg";
import {
  checkIsInViewport,
  useWindowScrollListener,
} from "../../utils/WindowScroll";

export default function Landing2_1() {
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

  return (
    <Background ref={viewRef}>
      <Wrapper>
        {show && <img src={Image} width={376} className="fade-in" />}
        <TextWrapper>
          <TextBold>15-20%</TextBold>
          <TextNormal>
            people have some of <br />
            the symptoms of dyslexia
          </TextNormal>
          <TextThin>following dyslexia center</TextThin>
        </TextWrapper>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  padding: 100px 0;
  background-color: #efefef;
  height: 580px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: row;
  color: #2b234a;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
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
