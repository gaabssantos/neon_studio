import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid #d9d9d91a;
  background: #212425;
  width: 310px;
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
