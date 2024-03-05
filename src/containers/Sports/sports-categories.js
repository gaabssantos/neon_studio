import Baseball from "../../assets/sports/icons/baseball.svg";
import Basketball from "../../assets/sports/icons/basketball.svg";
import Boxing from "../../assets/sports/icons/boxing.svg";
import BrasileiraoA from "../../assets/sports/icons/brasileirao_serie_a.png";
import BrasileiraoB from "../../assets/sports/icons/brasileirao_serie_b.png";
import Bundesliga from "../../assets/sports/icons/bundesliga.png";
import ChampionsLeague from "../../assets/sports/icons/champions_league.png";
import Esports from "../../assets/sports/icons/esports.svg";
import EuropaLeague from "../../assets/sports/icons/europa_league.png";
import Formula from "../../assets/sports/icons/formula_1.svg";
import LaLiga from "../../assets/sports/icons/la_liga.png";
import LigueOne from "../../assets/sports/icons/ligue_1.png";
import PremierLeague from "../../assets/sports/icons/premier_league.png";
import SerieA from "../../assets/sports/icons/serie_a.png";
import Soccer from "../../assets/sports/icons/soccer.svg";
import TargetSolid from "../../assets/sports/icons/target_solid.svg";
import Tennis from "../../assets/sports/icons/tennis.svg";
import Volley from "../../assets/sports/icons/volley.svg";

const sportsCategories = [
  {
    id: 1,
    name: "Brasileirão Série A",
    slug: "brasileirão-serie-a",
    image: BrasileiraoA,
  },
  {
    id: 2,
    name: "Brasileirão Série B",
    slug: "brasileirão-serie-b",
    image: BrasileiraoB,
  },
  {
    id: 3,
    name: "Liga dos campeões",
    slug: "liga-dos-campeões",
    image: ChampionsLeague,
  },
  {
    id: 4,
    name: "La Liga",
    slug: "la-liga",
    image: LaLiga,
  },
  {
    id: 5,
    name: "Premier League",
    slug: "premier-league",
    image: PremierLeague,
  },
  {
    id: 6,
    name: "Ligue 1",
    slug: "ligue-one",
    image: LigueOne,
  },
  {
    id: 7,
    name: "Bundesliga",
    slug: "bungesliga",
    image: Bundesliga,
  },
  {
    id: 8,
    name: "Europa League",
    slug: "europa-league",
    image: EuropaLeague,
  },
  {
    id: 9,
    name: "Serie A",
    slug: "serie-a",
    image: SerieA,
  },
];

export const sports = [
  {
    id: 1,
    name: "Futebol",
    slug: "soccer",
    image: Soccer,
  },
  {
    id: 2,
    name: "Basquete",
    slug: "basquete",
    image: Basketball,
  },
  {
    id: 3,
    name: "Tênis",
    slug: "tênis",
    image: Tennis,
  },
  {
    id: 4,
    name: "Vôlei",
    slug: "volley",
    image: Volley,
  },
  {
    id: 5,
    name: "Esporte Virtual",
    slug: "esporte-virtual",
    image: Esports,
  },
  {
    id: 6,
    name: "Fórmula 1",
    slug: "formula-1",
    image: Formula,
  },
  {
    id: 7,
    name: "Beisebol",
    slug: "beisebol",
    image: Baseball,
  },
  {
    id: 8,
    name: "Dardos",
    slug: "dardos",
    image: TargetSolid,
  },
  {
    id: 9,
    name: "Boxe",
    slug: "boxe",
    image: Boxing,
  },
];

export default sportsCategories;
