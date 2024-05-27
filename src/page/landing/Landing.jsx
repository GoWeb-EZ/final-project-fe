import styled from "styled-components";
import PointImage from "../../img/Point.svg";
import Landing1 from "./Landing1_main";
import Landing2_1 from "./Landing2-1_statistics";
import Landing2_2 from "./Landing2-2_statistics";
import Landing3 from "./Landing3_overview";
import Landing4 from "./Landing4_features";
import Landing5 from "./Landing4_plan";

export default function Landing() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
      <Landing1 />
      <Landing2_1 />
      <Landing2_2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />

      <Point src={PointImage} />
    </div>
  );
}

const Point = styled.img`
  width: 40%;
  position: absolute;
  right: 0;
  top: 3300px;
`;
