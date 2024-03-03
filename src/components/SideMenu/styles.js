import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid #d9d9d91a;
  background: #212425;
  width: ${({ $showicon }) => ($showicon ? "310px" : "200px")};
`;

export const WinConvite = styled.div`
  padding: 20px;
  border-bottom: 1px solid #d9d9d91a;
`;

export const Categories = styled.div`
  padding: 30px;
  border-bottom: 1px solid #d9d9d91a;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

export const CategoryTitle = styled.h2`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const CategoryName = styled.p`
  color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export const CategoryImg = styled.img`
  margin-right: 12px;
`;

export const BlockGames = styled.div`
  margin: auto;
  background: #111212;
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;
  width: 60px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(
      270deg,
      rgba(108, 29, 121, 0.15) 0.1%,
      rgba(255, 0, 61, 0.15) 102.93%
    );
  }
`;
