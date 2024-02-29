import gamesList from "./games-list";
import {
  GamesCategories,
  GamesCategoryTitle,
  GamesHeader,
  SeeAll,
  Title,
  ArrowLeft,
  ArrowRight,
  GamesContainer,
  GameImage,
} from "./styles";

export const Games = () => {
  return (
    <GamesCategories>
      {gamesList.map((game) => (
        <div key={game.id}>
          <GamesHeader>
            <GamesCategoryTitle>
              <Title>{game.name}</Title>
              <ArrowLeft />
              <ArrowRight />
            </GamesCategoryTitle>
            <SeeAll>Ver todos</SeeAll>
          </GamesHeader>
          <GamesContainer>
            {game.games.map((gameCard) => (
              <GameImage key={gameCard.id} src={gameCard.image} />
            ))}
          </GamesContainer>
        </div>
      ))}
    </GamesCategories>
  );
};
