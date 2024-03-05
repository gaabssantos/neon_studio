import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";

export const GamesCategories = styled.div`
  margin-top: 35px;
`;

export const GamesCategoryTitle = styled.div`
  display: flex;
`;

export const GamesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const SeeAll = styled.div`
  border-radius: 5px;
  background: linear-gradient(
    270deg,
    rgba(108, 29, 121, 0.15) 0.1%,
    rgba(255, 0, 61, 0.15) 102.93%
  );
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  font-size: 9.6px;
  font-weight: 700;
  line-height: 14.4px;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  margin-right: 15px;
`;

export const ArrowLeft = styled(KeyboardArrowLeftIcon)({
  color: "gray",
  opacity: "0.5",
  marginRight: "8px",
  cursor: "pointer",
});

export const ArrowRight = styled(KeyboardArrowRightIcon)({
  color: "gray",
  cursor: "pointer",
});

export const GamesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const GameImage = styled.img`
  width: 140px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 25px;
  position: relative;
`;
