import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
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

export const LiveBets = styled.div`
  margin-left: 7px;
`;

export const BetsTitle = styled.h2`
  color: #fdffff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const BetsContainer = styled.div`
  width: 520px;
  margin-bottom: 15px;

  .css-1ygcj2i-MuiTableCell-root {
    padding: 3px 13px;
    background: #464b4c;
    color: #fdffff;
    font-size: 9px;
    font-weight: 400;
    border: none;
  }

  .css-1ex1afd-MuiTableCell-root {
    background: #4a5052;
    color: #fff;
    border-bottom: 2px solid #282c2d80;
  }

  @media (max-width: 600px) {
    width: 230px;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 330px;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    width: 430px;
  }
`;

export const BetsName = styled.div`
  display: flex;
  justify-content: space-between;
  background: #5d6567;
  padding: 10px;

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

export const Title = styled.h2`
  width: 200px;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Teams = styled.div`
  display: flex;
  align-items: center;
`;

export const Scores = styled.div``;

export const Score = styled.p`
  color: #05ff00;
  font-size: 9px;
  font-weight: 400;
`;

export const TeamName = styled.h2`
  color: #fff;
  font-size: 9px;
  font-weight: 400;
  margin-left: 10px;
`;

export const Odds = styled.div`
  width: 38px;
  background: #282c2d;
  text-align: center;
  padding: 5px;

  color: #fff;
  font-size: 9px;
  font-weight: 400;
`;

export const InfosContainer = styled.div`
  margin-left: 6px;
  background: #323637;
`;

export const SelectInfoContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 300px;
  margin-top: 5px;
  font-size: 10px;
  background: #4a5052;
`;

export const SelectInfo = styled.div`
  padding: 8px 20px;
  color: #fff;
  cursor: pointer;

  background: ${({ $isactive }) => ($isactive ? "#464b4c" : "#323637")};
`;

export const TeamInfoName = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
  background: #4a5052;
  color: #fdffff;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 5px;
  margin: 5px;

  img {
    margin-left: 8px;
  }
`;
