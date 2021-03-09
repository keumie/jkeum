import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  border-radius: 16px;
  box-shadow: 5px 5px 50px 5px rgba(0, 0, 0);
  width: 300px;
  height: 600px;
  flex-shrink: 0;
  opacity: 1;
`;

export const ImageText = styled.div`
  border-radius: 15px;
  position: absolute;
  top: 0;
  width: 300px;
  height: 600px;
  background-color: gray;
  color: white;
  transition: 0.7s all ease;
  opacity: 1;
  // &:hover {
  //   opacity: 0.9;
  // }
`;
