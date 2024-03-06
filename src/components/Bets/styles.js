import styled from "styled-components";

export const LiveBets = styled.div`
  margin-left: 7px;
  margin-top: 78px;
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
