import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MagnifyingGlass from "../../assets/casino/magnifying_glass.svg";
import Filter from "../../assets/sports/filter.svg";
import Favorites from "../../assets/sports/icons/favorites.svg";
import { sportsCategories, leaguesCategories } from "./sports-categories";
import {
  InputControl,
  Input,
  SideMenu,
  SelectContainer,
  Select,
  FilterContainer,
  Championship,
  FavoritesContainer,
  FavoriteName,
  SportsContainer,
  SportsName,
} from "./styles";

export const SideMenuSports = () => {
  return (
    <div>
      <InputControl>
        <img src={MagnifyingGlass} alt="lupa"></img>
        <Input type="text" placeholder="Encontrar uma partida"></Input>
      </InputControl>
      <SideMenu>
        <SelectContainer>
          <Select $isactive={true}>Pré-Jogo</Select>
          <Select>Ao vivo</Select>
        </SelectContainer>
        <div>
          <FilterContainer>
            <h2>Todos Eventos</h2>
            <img src={Filter} alt="filtro" />
          </FilterContainer>
          {leaguesCategories.map((category) => (
            <Championship key={category.id}>
              <img src={category.image} alt={category.slug} />
              <h3>{category.name}</h3>
            </Championship>
          ))}
          <FavoritesContainer>
            <FavoriteName>
              <img src={Favorites} alt="favoritos" />
              <h3>Favoritos</h3>
            </FavoriteName>
            <p style={{ color: "#05FF00" }}>0</p>
          </FavoritesContainer>
          {sportsCategories.map((sport) => (
            <SportsContainer key={sport.id}>
              <SportsName>
                <img src={sport.image} alt={sport.slug} />
                <h3>{sport.name}</h3>
              </SportsName>
              <KeyboardArrowDownIcon
                style={{ color: "#fff", cursor: "pointer" }}
              />
            </SportsContainer>
          ))}
        </div>
      </SideMenu>
    </div>
  );
};
