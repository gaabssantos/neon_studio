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

import { sports } from "./sports-categories";
import {
  LiveBets,
  BetsTitle,
  BetsContainer,
  BetsName,
  Title,
  Name,
  Teams,
  Scores,
  Score,
  Odds,
  TeamName,
} from "./styles";

export const Bets = () => {
  const [isOpen, setIsOpen] = useState([]);

  return (
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
  );
};
