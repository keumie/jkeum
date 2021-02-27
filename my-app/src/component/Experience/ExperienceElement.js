import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const ExperienceContainer = styled.div`
  padding: 40px 10%;
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const ExperienceHeader = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 50px;
  color: orange;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const ExperienceBody = styled.ul`
  display: grid;
  margin: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  padding: 30px 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const ExperienceItem = styled(LinkS)`
  font-size: 1.5rem;
  transistion: 0.2 ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: orange;
    transition: 0.2s ease-in-out;
  }
`;

export const ExperienceLogo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const ExperienceInfoContainer = styled.div`
  color: black;
  padding: 10px 0px;
`;

export const EInfoTitle = styled.div`
  color: #fdd86a;
  font-size: 20px;
  padding: 0px 10px;
`;

export const EInfoSub = styled.div`
  color: grey;
  font-size: 15px;
  padding: 0px 10px;
`;

export const EInfoDesc = styled.div`
  color: white;
  padding: 10px;
`;
