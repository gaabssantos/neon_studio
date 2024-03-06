import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext, useState } from "react";

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
  const [isOpen, setIsOpen] = useState([]);

  return (
    <Container $showicon={!showIcons}>
      <WinConvite>
        <ButtonApp>Ganhe R$50 por convite 💥</ButtonApp>
      </WinConvite>
      {allCategories.map((category) => (
        <Categories key={category.id}>
          <Category>
            <CategoryTitle>{category.name}</CategoryTitle>
            {!isOpen.includes(category.id) ? (
              <KeyboardArrowUpIcon
                style={{ color: "#fff", cursor: "pointer" }}
                onClick={() => {
                  setIsOpen([...isOpen, category.id]);
                }}
              />
            ) : (
              <KeyboardArrowDownIcon
                style={{ color: "#fff", cursor: "pointer" }}
                onClick={() => {
                  const newArr = isOpen.filter((id) => id !== category.id);

                  setIsOpen(newArr);
                }}
              />
            )}
          </Category>
          {category.categories.map((games) => {
            if (!showIcons) {
              if (!games.isTitle) {
                if (!isOpen.includes(category.id)) {
                  return (
                    <CategoryName key={games.id}>
                      <CategoryImg
                        key={games.id}
                        src={games.image}
                        alt={games.slug}
                      />
                      {games.name}
                    </CategoryName>
                  );
                }
              } else {
                if (!isOpen.includes(category.id)) {
                  return (
                    <div key={games.id}>
                      <Category>
                        <CategoryTitle>{games.name}</CategoryTitle>
                      </Category>
                      {games.categories.map((cate) => (
                        <CategoryName key={cate.id}>
                          <CategoryImg src={cate.image} alt={cate.slug} />
                          {cate.name}
                        </CategoryName>
                      ))}
                    </div>
                  );
                }
              }
            } else {
              if (!games.isTitle) {
                if (!isOpen.includes(category.id)) {
                  return (
                    <BlockGames key={games.id}>
                      <CategoryImg src={games.image} alt={games.slug} />
                    </BlockGames>
                  );
                }
              } else {
                if (!isOpen.includes(category.id)) {
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
