import Field from "../../assets/sports/field.png";
import Soccer from "../../assets/sports/icons/soccer.svg";
import Team1 from "../../assets/sports/icons/team1.png";
import Team2 from "../../assets/sports/icons/team2.png";
import Informations from "../../assets/sports/informations.png";
import {
  TeamName,
  InfosContainer,
  SelectInfoContainer,
  SelectInfo,
  InfoGame,
  Game,
  LeagueName,
  GameInfo,
  GameScore,
  GameTime,
  FieldImg,
  GameInformations,
} from "./styles";

export const GamesInfo = () => {
  return (
    <InfosContainer>
      <SelectInfoContainer>
        <SelectInfo $isactive={true}>Info ao vivo</SelectInfo>
        <SelectInfo>TV ao vivo 75</SelectInfo>
      </SelectInfoContainer>
      <InfoGame>
        <img src={Soccer} alt="Futebol" />
        Hapoel Bnei Zalfa - Hapoel Kfar Kana
      </InfoGame>
      <Game>
        <LeagueName>Israel Liga Alef</LeagueName>
        <GameInfo>
          <img src={Team1} alt="time-1" />
          <TeamName style={{ marginRight: "10px" }}>Hapoel Bnei Zalfa</TeamName>
          <GameScore>0</GameScore>:<GameScore>0</GameScore>
          <img style={{ marginLeft: "10px" }} src={Team2} alt="time-2" />
          <TeamName>Hapoel Kfar Kana</TeamName>
        </GameInfo>
        <GameTime>0:0|0:0</GameTime>
        <FieldImg src={Field} alt="campo" />
        <GameInformations src={Informations} alt="informations" />
      </Game>
    </InfosContainer>
  );
};
