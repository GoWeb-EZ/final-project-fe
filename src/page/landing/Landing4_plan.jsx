import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Landing5() {
  const navigate = useNavigate();

  return (
    <Background>
      <Wrapper>
        <Title>Our Plan</Title>
        <Description>You can use doodling with various plan</Description>
        <PlanWrapper>
          <Plan>
            <PlanTextWrapper>
              <PlanTitle>Free</PlanTitle>
              <PlanDetail>
                - Unlimited conversion
                <br />
                - Up to 50 text-images <br />- Limited 1 tag
              </PlanDetail>
            </PlanTextWrapper>
          </Plan>
          <Plan>
            <PlanTextWrapper>
              <PlanTitle>Personal</PlanTitle>
              <PlanDetail>
                - Unlimited conversion
                <br />
                - Unlimited save & tags <br />- No ads
              </PlanDetail>
            </PlanTextWrapper>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <PlanTitle>$2.99</PlanTitle>
                <PlanDetail>&nbsp;/m</PlanDetail>
              </div>
              <Button> Buy now </Button>
            </div>
          </Plan>
          <Plan>
            <PlanTextWrapper>
              <PlanTitle>Organization</PlanTitle>
              <PlanDetail>
                - Unlimited conversion
                <br />
                - Unlimited save & tags <br />- No ads
              </PlanDetail>
            </PlanTextWrapper>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <PlanTitle>$75.5k</PlanTitle>
                <PlanDetail>&nbsp;/m</PlanDetail>
              </div>
              <Button onClick={() => navigate("/contact")}> Contact us</Button>
            </div>
          </Plan>
        </PlanWrapper>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  margin-top: 100px;
  padding: 100px 0;

  background-color: #efefef;

  height: 600px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  color: #2b234a;
`;

const Title = styled.div`
  font-family: "NotoSans-SemiBold";
  font-size: 46px;
`;

const Description = styled.div`
  font-family: "NotoSans-Light";
  font-size: 24px;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 50px;
  margin-bottom: 20px;
`;

const Plan = styled.div`
  z-index: 20;
  flex-grow: 1;
  margin: 10px;
  height: 300px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(43, 35, 74, 0.1);
  border-radius: 20px;
`;

const PlanTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanTitle = styled.div`
  font-family: "NotoSans-SemiBold";
  font-size: 28px;
`;

const PlanDetail = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 16px;
  margin-top: 10px;
`;

const Button = styled.div`
  margin-top: 20px;
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
