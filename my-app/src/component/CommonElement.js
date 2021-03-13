import styled from "styled-components";

export const Container = styled.div`
  padding: 75px 10%;
  @media screen and (max-width: 800px) {
    padding: 50px 20px;
  }
`;
export const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

export const Underline = styled.div`
  background: orange;
  height: 4px;
  margin: 10px 0 75px 0;
  width: 100px;
`;
