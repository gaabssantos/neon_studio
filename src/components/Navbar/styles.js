import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #323637;
  padding: 20px;
  color: #fff;

  .menu {
    cursor: pointer;
  }

  .first-column {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 600px) {
      display: block;

      .menu {
        display: none;
      }
    }

    @media (max-width: 800px) {
      display: block;

      .menu {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-family: Rajdhani;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 140px;
`;

export const Item = styled.div`
  margin-left: 40px;

  color: #fdffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ItemContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const Divisor = styled.div`
  position: relative;
  top: 31px;
  width: 110px;
  height: 3px;
  background: ${(props) =>
    props.isActive && "linear-gradient(270deg, #6c1d79 0.1%, #ff003d 102.93%)"};
  cursor: auto;

  @media (max-width: 600px) {
    background: none;
  }

  @media (max-width: 800px) {
    background: none;
  }

  @media (max-width: 855px) {
    background: none;
  }
`;

export const Login = styled.div`
  display: flex;
  justify-content: center;
`;

export const Signup = styled.button`
  background: none;
  border: none;
  color: #adadad;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-right: 12px;
  cursor: pointer;
`;
