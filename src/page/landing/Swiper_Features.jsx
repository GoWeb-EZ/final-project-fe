import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../css/swiper.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import styled from "styled-components";
import ImageWrite from "../../img/draw.svg";
import ImageChange from "../../img/change.svg";
import ImageNote from "../../img/notepad.svg";

export default function Swiper_Features() {
  SwiperCore.use([Autoplay, Pagination]);
  const params = {
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      <SwiperSlide>
        <SlideWrapper>
          <img src={ImageWrite} width={250} />
          <TextWrapper>
            <Title>Write and Convert </Title>
            <Description>
              Write your memo in doodling. <br />
              The texts are quickly converted to an image.
            </Description>
          </TextWrapper>
        </SlideWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <SlideWrapper>
          <img src={ImageChange} width={200} />
          <TextWrapper>
            <Title>Change & Save </Title>
            <Description>
              Don't you like the image? <br />
              Doodling will find you a better one! <br /> You can reconvert the
              image unlimitedly and save it.
            </Description>
          </TextWrapper>
        </SlideWrapper>
      </SwiperSlide>

      <SwiperSlide>
        <SlideWrapper>
          <img src={ImageNote} width={250} />
          <TextWrapper>
            <Title> Your own notepad </Title>
            <Description>
              Store your notes by tagging them. <br /> Don’t spend too much time
              looking for your own notes, they are neatly organized in your
              notepad.
            </Description>
          </TextWrapper>
        </SlideWrapper>
      </SwiperSlide>
    </Swiper>
  );
}

const SlideWrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  margin: 10px;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(43, 35, 74, 0.1);
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Title = styled.div`
  font-family: "NotoSans-SemiBold";
  font-size: 28px;
`;

const Description = styled.div`
  margin-top: 10px;
  font-family: "NotoSans-Light";
  font-size: 18px;
`;
