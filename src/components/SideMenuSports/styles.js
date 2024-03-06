import styled from "styled-components";

export const InputControl = styled.div`
  display: flex;
  justify-content: end;
  background: #464b4c;
  padding-left: 10px;
  margin-top: 35px;
  width: 175px;
  padding: 7px 0;
`;

export const Input = styled.input`
  background: #464b4c;
  border: none;
  color: #fff;
  height: 25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const SideMenu = styled.div`
  background: #464b4c;
  width: 175px;

  @media (max-width: 600px) {
    width: 250px;
    margin-bottom: 20px;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 350px;
    margin-bottom: 20px;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    width: 450px;
    margin-bottom: 20px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 10px;
`;

export const Select = styled.div`
  padding: 8px 20px;
  color: #fff;
  cursor: pointer;

  box-shadow: ${({ $isactive }) =>
    $isactive && "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"};
  border: ${({ $isactive }) => $isactive && "1px solid #000"};
  background: ${({ $isactive }) => $isactive && "#464b4c"};
`;

export const FilterContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217, 217, 217, 0.1);

  h2 {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    width: 40px;
  }
`;

export const Championship = styled.div`
  display: flex;
  padding: 10px 25px;
  align-items: center;
  border-bottom: 1px solid rgba(217, 217, 217, 0.1);
  cursor: pointer;

  h3 {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    margin-left: 10px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const FavoriteName = styled.div`
  display: flex;

  h3 {
    margin-left: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
  }
`;

export const SportsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  border-top: 1px solid rgba(217, 217, 217, 0.1);

  h3 {
    margin-left: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: 400;
  }
`;

export const SportsName = styled.div`
  display: flex;
`;
