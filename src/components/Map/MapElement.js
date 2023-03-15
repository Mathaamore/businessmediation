import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  height: 100vh;
  z-index: 2;
  width: 100%;
  background: #f6f7f8;

  @media screen and (max-width: 480px) {
    height: 75vh;
  }
`;
