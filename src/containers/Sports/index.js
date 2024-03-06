import { SideMenuSports, Bets, GamesInfo } from "../../components";
import { Container, MainContent } from "./styles";

const Sports = () => {
  return (
    <Container>
      <MainContent>
        <SideMenuSports />
        <Bets />
        <GamesInfo />
      </MainContent>
    </Container>
  );
};

export default Sports;
