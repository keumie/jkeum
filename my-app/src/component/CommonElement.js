import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 10%;
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;
export const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Underline = styled.div`
  background: orange;
  height: 4px;
  margin: 10px 0 75px 0;
  width: 100px;
`;
