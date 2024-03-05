import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

import MagnifyingGlass from "../../assets/casino/magnifying_glass.svg";
import filter from "../../assets/sports/filter.svg";
import Favorites from "../../assets/sports/icons/favorites.svg";
import Soccer from "../../assets/sports/icons/soccer.svg";
import sportsCategories, { sports } from "./sports-categories";
import {
  Container,
  SideMenu,
  InputControl,
  Input,
  MainContent,
  SelectContainer,
  Select,
  FilterContainer,
  Championship,
  FavoritesContainer,
  FavoriteName,
  SportsContainer,
  SportsName,
  LiveBets,
  BetsTitle,
  BetsContainer,
  BetsName,
  Title,
  Name,
  Teams,
  Scores,
  Score,
  TeamName,
  Odds,
  InfosContainer,
  SelectInfoContainer,
  SelectInfo,
  TeamInfoName,
} from "./styles";

const Sports = () => {
  const [isOpen, setIsOpen] = useState([]);

  return (
    <Container>
      <InputControl>
        <img src={MagnifyingGlass} alt="lupa"></img>
        <Input type="text" placeholder="Encontrar uma partida"></Input>
      </InputControl>
      <MainContent>
        <SideMenu>
          <SelectContainer>
            <Select $isactive={true}>Pré-Jogo</Select>
            <Select>Ao vivo</Select>
          </SelectContainer>
          <div>
            <FilterContainer>
              <h2>Todos Eventos</h2>
              <img src={filter} alt="filtro" />
            </FilterContainer>
            {sportsCategories.map((category) => (
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
            {sports.map((sport) => (
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
        <LiveBets>
          <BetsTitle>Apostas ao vivo</BetsTitle>
          {sports.map((sport) => (
            <BetsContainer key={sport.id}>
              <BetsName>
                <Name>
                  <img src={sport.image} alt={sport.slug} />
                  <Title>{sport.name}</Title>
                </Name>
                {!isOpen.includes(sport.id) ? (
                  <KeyboardArrowDownIcon
                    style={{ color: "#fff", cursor: "pointer" }}
                    onClick={() => {
                      setIsOpen([...isOpen, sport.id]);
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    style={{ color: "#fff", cursor: "pointer" }}
                    onClick={() => {
                      const newArr = isOpen.filter((id) => id !== sport.id);

                      setIsOpen(newArr);
                    }}
                  />
                )}
              </BetsName>
              {isOpen.includes(sport.id) && (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Evento</TableCell>
                        <TableCell>Tempo</TableCell>
                        <TableCell>Venc 1</TableCell>
                        <TableCell>x</TableCell>
                        <TableCell>Venc 2</TableCell>
                        <TableCell>Mais</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Teams>
                            <Scores>
                              <Score>0</Score>
                              <Score>0</Score>
                            </Scores>
                            <div>
                              <TeamName>FC Andorra</TeamName>
                              <TeamName>FC Andorra</TeamName>
                            </div>
                          </Teams>
                        </TableCell>
                        <TableCell>86’</TableCell>
                        <TableCell>
                          <Odds>1.08</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>11</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>30</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>+80</Odds>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Teams>
                            <Scores>
                              <Score>0</Score>
                              <Score>0</Score>
                            </Scores>
                            <div>
                              <TeamName>FC Andorra</TeamName>
                              <TeamName>FC Andorra</TeamName>
                            </div>
                          </Teams>
                        </TableCell>
                        <TableCell>86’</TableCell>
                        <TableCell>
                          <Odds>1.08</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>11</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>30</Odds>
                        </TableCell>
                        <TableCell>
                          <Odds>+80</Odds>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </BetsContainer>
          ))}
        </LiveBets>
        <InfosContainer>
          <SelectInfoContainer>
            <SelectInfo $isactive={true}>Info ao vivo</SelectInfo>
            <SelectInfo>TV ao vivo 75</SelectInfo>
          </SelectInfoContainer>
          <TeamInfoName>
            <img src={Soccer} alt="Futebol" />
            Hapoel Bnei Zalfa - Hapoel Kfar Kana
          </TeamInfoName>
        </InfosContainer>
      </MainContent>
    </Container>
  );
};

export default Sports;
