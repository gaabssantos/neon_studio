import AllGames from "../../assets/icons/categories/casino/all_games.svg";
import Aviator from "../../assets/icons/categories/casino/aviator.svg";
import FortuneTiger from "../../assets/icons/categories/casino/fortune_tiger.svg";
import LiveCasino from "../../assets/icons/categories/casino/live_casino.svg";
import Mines from "../../assets/icons/categories/casino/mines.svg";
import Providers from "../../assets/icons/categories/casino/providers.svg";
import SlotsGames from "../../assets/icons/categories/casino/slots_games.svg";
import Basketball from "../../assets/icons/categories/sports/basketball.svg";
import Championship from "../../assets/icons/categories/sports/championship.svg";
import Esports from "../../assets/icons/categories/sports/e_sports.svg";
import LiveGames from "../../assets/icons/categories/sports/live_games.svg";
import NextGames from "../../assets/icons/categories/sports/next_games.svg";
import Soccer from "../../assets/icons/categories/sports/soccer.svg";
import Tennis from "../../assets/icons/categories/sports/tennis.svg";
import VirtualGames from "../../assets/icons/categories/sports/virtual_games.svg";
import Volley from "../../assets/icons/categories/sports/volley.svg";

export const casino = [
  {
    id: 1,
    name: "Todos os jogos",
    image: AllGames,
    slug: "todos-os-jogos",
  },
  {
    id: 2,
    name: "Jogos slots",
    image: SlotsGames,
    slug: "jogos-slots",
  },
  {
    id: 3,
    name: "Cassino ao vivo",
    image: LiveCasino,
    slug: "cassino-ao-vivo",
  },
  {
    id: 4,
    name: "Mines",
    image: Mines,
    slug: "mines",
  },
  {
    id: 5,
    name: "Fortune Tiger",
    image: FortuneTiger,
    slug: "fortune-tiger",
  },
  {
    id: 6,
    name: "Aviator",
    image: Aviator,
    slug: "aviator",
  },
  {
    id: 7,
    name: "Provedores",
    image: Providers,
    slug: "provedores",
  },
];

export const sports = [
  {
    id: 1,
    name: "Jogos ao vivo",
    image: LiveGames,
    slug: "jogos-ao-vivo",
    isTitle: false,
  },
  {
    id: 2,
    name: "Próximos jogos",
    image: NextGames,
    slug: "proximos-jogos",
    isTitle: false,
  },
  {
    id: 3,
    name: "E-sports",
    image: Esports,
    slug: "e-sports",
    isTitle: false,
  },
  {
    id: 4,
    name: "Campeonatos",
    isTitle: true,
  },
  {
    id: 5,
    name: "Brasileirão Série A",
    image: Championship,
    slug: "brasileirao-serie-a",
    isTitle: false,
  },
  {
    id: 6,
    name: "Copa Libertadores",
    image: Championship,
    slug: "copa-libertadores",
    isTitle: false,
  },
  {
    id: 7,
    name: "Campeonato Inglês",
    image: Championship,
    slug: "campeonato-ingles",
    isTitle: false,
  },
  {
    id: 8,
    name: "Campeonato Espanhol",
    image: Championship,
    slug: "campeonato-espanhol",
    isTitle: false,
  },
  {
    id: 9,
    name: "Campeonato Italiano",
    image: Championship,
    slug: "campeonato-italiano",
    isTitle: false,
  },
  {
    id: 10,
    name: "Top 5 esportes",
    isTitle: true,
  },
  {
    id: 11,
    name: "Futebol",
    image: Soccer,
    slug: "futebol",
    isTitle: false,
  },
  {
    id: 12,
    name: "Basquete",
    image: Basketball,
    slug: "basquete",
    isTitle: false,
  },
  {
    id: 13,
    name: "Tênis",
    image: Tennis,
    slug: "tenis",
    isTitle: false,
  },
  {
    id: 14,
    name: "Vôlei",
    image: Volley,
    slug: "volei",
    isTitle: false,
  },
  {
    id: 15,
    name: "Esportes Virtuais",
    image: VirtualGames,
    slug: "esportes-virtuais",
    isTitle: false,
  },
];
