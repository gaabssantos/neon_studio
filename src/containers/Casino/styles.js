import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InputControl = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  background: red;
  background: #313334;
  padding-left: 10px;
  margin-top: 35px;
`;

export const Input = styled.input`
  width: 98%;
  background: #313334;
  border: none;
  padding: 15px;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 55px;
`;

export const Category = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: linear-gradient(
    270deg,
    rgba(108, 29, 121, 0.15) 0.1%,
    rgba(255, 0, 61, 0.15) 102.93%
  );
  text-align: center;
  cursor: pointer;

  img {
    margin: 10px 0;
  }

  p {
    margin-top: 5px;
  }
`;

export const CategoryName = styled.p`
  max-height: 13.6px;
  color: #fff;
  text-align: center;

  font-size: 13.6px;
  font-weight: 600;
  line-height: 13.6px;
  margin-top: 5px;
`;
