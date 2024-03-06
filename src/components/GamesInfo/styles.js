import styled from "styled-components";

export const TeamName = styled.h2`
  color: #fff;
  font-size: 9px;
  font-weight: 400;
  margin-left: 10px;
`;

export const InfosContainer = styled.div`
  margin-left: 6px;
  margin-top: 78px;
  background: #323637;
  height: 420px;
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

export const InfoGame = styled.div`
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

export const Game = styled.div`
  color: #fdffff;
  font-size: 9px;
  font-weight: 400;
  text-align: center;
  margin-top: 9px;
`;

export const LeagueName = styled.p``;

export const GameScore = styled.div`
  width: 13px;
  height: 15px;
  background: #cb0000;
  text-align: center;
  margin: 0 7px;
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px;
  background: #4a5052;
`;

export const GameTime = styled.p`
  margin-top: 6px;
`;

export const FieldImg = styled.img`
  width: 100%;
  margin-top: 48px;
`;

export const GameInformations = styled.img`
  width: 100%;
`;
