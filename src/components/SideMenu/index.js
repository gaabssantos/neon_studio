import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext } from "react";

import { NavbarContext } from "../../context/NavbarContext";
import { ButtonApp } from "../Button";
import allCategories from "./categories-list";
import others from "./others-list";
import {
  Container,
  WinConvite,
  Categories,
  Category,
  CategoryTitle,
  CategoryName,
  CategoryImg,
  BlockGames,
} from "./styles";

export const SideMenu = () => {
  const { showIcons } = useContext(NavbarContext);

  return (
    <Container $showicon={!showIcons}>
      <WinConvite>
        <ButtonApp>Ganhe R$50 por convite 💥</ButtonApp>
      </WinConvite>
      {allCategories.map((category) => (
        <Categories key={category.id}>
          <Category>
            <CategoryTitle>{category.name}</CategoryTitle>
            <KeyboardArrowUpIcon style={{ cursor: "pointer" }} />
          </Category>
          {category.categories.map((games) => {
            if (!showIcons) {
              if (!games.isTitle) {
                return (
                  <CategoryName key={games.id}>
                    <CategoryImg src={games.image} alt={games.slug} />
                    {games.name}
                  </CategoryName>
                );
              } else {
                return (
                  <>
                    <Category>
                      <CategoryTitle>{games.name}</CategoryTitle>
                    </Category>
                    {games.categories.map((cate) => (
                      <CategoryName key={cate.id}>
                        <CategoryImg src={cate.image} alt={cate.slug} />
                        {cate.name}
                      </CategoryName>
                    ))}
                  </>
                );
              }
            } else {
              if (!games.isTitle) {
                return (
                  <BlockGames key={games.id}>
                    <CategoryImg src={games.image} alt={games.slug} />
                  </BlockGames>
                );
              } else {
                return (
                  <>
                    {games.categories.map((cate) => (
                      <BlockGames key={cate.id}>
                        <CategoryImg src={cate.image} alt={cate.slug} />
                      </BlockGames>
                    ))}
                  </>
                );
              }
            }
          })}
        </Categories>
      ))}
      <Categories>
        {others.map((other) => {
          if (!showIcons) {
            return (
              <CategoryName key={other.id}>
                <CategoryImg src={other.image} alt={other.slug} />
                {other.name}
              </CategoryName>
            );
          } else {
            return (
              <BlockGames key={other.id}>
                <CategoryImg src={other.image} alt={other.slug} />
              </BlockGames>
            );
          }
        })}
      </Categories>
    </Container>
  );
};
