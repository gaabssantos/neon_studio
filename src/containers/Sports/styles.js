import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 600px) {
    display: block;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    display: block;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    display: block;
  }
`;
