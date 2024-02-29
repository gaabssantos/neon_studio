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
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 55px;
`;

export const Category = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-top: 15px;
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

  &:hover {
    opacity: 0.7;
  }
`;

export const Recommended = styled.div`
  margin-top: 60px;
`;

export const RecommendedTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
`;

export const RecommendedImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RecommendedImage = styled.img`
  margin-top: 5px;
  width: 330px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    width: 220px;
  }
`;
