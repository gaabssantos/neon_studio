import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { ButtonApp } from "../Button";
import { casino, sports } from "./categories-list";
import others from "./others-list";
import {
  Container,
  WinConvite,
  Categories,
  Category,
  CategoryTitle,
  CategoryName,
  CategoryImg,
} from "./styles";

export const SideMenu = () => {
  return (
    <Container>
      <WinConvite>
        <ButtonApp>Ganhe R$50 por convite 💥</ButtonApp>
      </WinConvite>
      <Categories>
        <Category>
          <CategoryTitle>Cassino</CategoryTitle>
          <KeyboardArrowUpIcon style={{ cursor: "pointer" }} />
        </Category>
        {casino.map((category) => (
          <CategoryName key={category.id}>
            <CategoryImg src={category.image} alt={category.slug} />
            {category.name}
          </CategoryName>
        ))}
      </Categories>
      <Categories>
        <Category>
          <CategoryTitle>Esportes</CategoryTitle>
          <KeyboardArrowUpIcon style={{ cursor: "pointer" }} />
        </Category>
        {sports.map((sport) => {
          if (!sport.isTitle) {
            return (
              <CategoryName key={sport.id}>
                <CategoryImg src={sport.image} alt={sport.slug} />
                {sport.name}
              </CategoryName>
            );
          } else {
            return (
              <Category key={sport.id}>
                <CategoryTitle>{sport.name}</CategoryTitle>
              </Category>
            );
          }
        })}
      </Categories>
      <Categories>
        {others.map((other) => (
          <CategoryName key={other.id}>
            <CategoryImg src={other.image} alt={other.slug} />
            {other.name}
          </CategoryName>
        ))}
      </Categories>
    </Container>
  );
};
