import styled from "styled-components";

export const Image = styled.img`
  border-radius: 16px;
  box-shadow: 5px 5px 50px 5px rgba(0, 0, 0);
  width: 300px;
  height: 600px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    opacity: 0.2;
    background-color: black;
  }
`;
