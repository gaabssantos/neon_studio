import AutoRouleteCasino from "../../assets/casino/games/casino/auto_roulete_1.png";
import BrasilianRouleteCasino from "../../assets/casino/games/casino/brasilian_roulete.png";
import LiveLobby from "../../assets/casino/games/casino/live_lobby.png";
import LiveMegaWheel from "../../assets/casino/games/casino/mega_wheel.png";
import SpacemanCasino from "../../assets/casino/games/casino/spaceman.png";
import SpeedRouleteCasino from "../../assets/casino/games/casino/speed_roulete_1.png";
import Aviator from "../../assets/casino/games/crash/aviator.png";
import Balloon from "../../assets/casino/games/crash/balloon.png";
import JetX from "../../assets/casino/games/crash/jetx.png";
import JetX3 from "../../assets/casino/games/crash/jetx3.png";
import MagnifyMan from "../../assets/casino/games/crash/magnify-man.png";
import Spaceman from "../../assets/casino/games/crash/spaceman.png";
import DragonHatch from "../../assets/casino/games/pg/dragon_hatch.png";
import FortuneMouse from "../../assets/casino/games/pg/fortune_mouse.png";
import FortuneOx from "../../assets/casino/games/pg/fortune_ox.png";
import FortuneRabbit from "../../assets/casino/games/pg/fortune_rabbit.png";
import FortuneTiger from "../../assets/casino/games/pg/fortune_tiger.png";
import GaneshaGold from "../../assets/casino/games/pg/ganesha_gold.png";
import AutoRoulete from "../../assets/casino/games/roulete/auto_roulete_1.png";
import BrasilianRoulete from "../../assets/casino/games/roulete/brasilian_roulete.png";
import LiveMegaRoulete from "../../assets/casino/games/roulete/live_mega_roulete.png";
import LivePowerUpRoulete from "../../assets/casino/games/roulete/live_powerup_roulete.png";
import Roulete from "../../assets/casino/games/roulete/roulete_2.png";
import SpeedRoulete from "../../assets/casino/games/roulete/speed_roulete_1.png";
import DiamondStrike from "../../assets/casino/games/slots/diamond_strike.png";
import FortuneMouseSlots from "../../assets/casino/games/slots/fortune_mouse.png";
import FortuneOxSlots from "../../assets/casino/games/slots/fortune_ox.png";
import FortuneTigerSlots from "../../assets/casino/games/slots/fortune_tiger.png";
import MasterJoker from "../../assets/casino/games/slots/master_joker.png";
import Super7s from "../../assets/casino/games/slots/super_7s.png";

const gamesList = [
  {
    id: 1,
    name: "Jogos da PG",
    games: [
      {
        id: 1,
        image: FortuneTiger,
        slug: "fortune-tiger",
      },
      {
        id: 2,
        image: FortuneOx,
        slug: "fortune-ox",
      },
      {
        id: 3,
        image: FortuneMouse,
        slug: "fortune-mouse",
      },
      {
        id: 4,
        image: FortuneRabbit,
        slug: "fortune-rabbit",
      },
      {
        id: 5,
        image: GaneshaGold,
        slug: "ganesha-gold",
      },
      {
        id: 6,
        image: DragonHatch,
        slug: "dragon-hatch",
      },
    ],
  },
  {
    id: 2,
    name: "Jogos de Roleta",
    games: [
      {
        id: 1,
        image: BrasilianRoulete,
        slug: "roleta-brasileira",
      },
      {
        id: 2,
        image: SpeedRoulete,
        slug: "roleta-velocidade",
      },
      {
        id: 3,
        image: AutoRoulete,
        slug: "roleta-automatica",
      },
      {
        id: 4,
        image: LiveMegaRoulete,
        slug: "mega-roleta",
      },
      {
        id: 5,
        image: LivePowerUpRoulete,
        slug: "powerup-roulete",
      },
      {
        id: 6,
        image: Roulete,
        slug: "roleta",
      },
    ],
  },
  {
    id: 3,
    name: "Jogos Crash",
    games: [
      {
        id: 1,
        image: Spaceman,
        slug: "spaceman",
      },
      {
        id: 2,
        image: Aviator,
        slug: "aviator",
      },
      {
        id: 3,
        image: JetX,
        slug: "jetx",
      },
      {
        id: 4,
        image: Balloon,
        slug: "balloon",
      },
      {
        id: 5,
        image: JetX3,
        slug: "jetx3",
      },
      {
        id: 6,
        image: MagnifyMan,
        slug: "magnify-man",
      },
    ],
  },
  {
    id: 4,
    name: "Cassino ao vivo",
    games: [
      {
        id: 1,
        image: BrasilianRouleteCasino,
        slug: "roleta-brasileira",
      },
      {
        id: 2,
        image: SpacemanCasino,
        slug: "spaceman",
      },
      {
        id: 3,
        image: LiveLobby,
        slug: "lobby",
      },
      {
        id: 4,
        image: SpeedRouleteCasino,
        slug: "speed-roulete",
      },
      {
        id: 5,
        image: LiveMegaWheel,
        slug: "mega-wheel",
      },
      {
        id: 6,
        image: AutoRouleteCasino,
        slug: "auto-roulete",
      },
    ],
  },
  {
    id: 5,
    name: "Jogos slots",
    games: [
      {
        id: 1,
        image: FortuneTigerSlots,
        slug: "fortune-tiger",
      },
      {
        id: 2,
        image: FortuneOxSlots,
        slug: "fortune-ox",
      },
      {
        id: 3,
        image: FortuneMouseSlots,
        slug: "fortune-mouse",
      },
      {
        id: 4,
        image: DiamondStrike,
        slug: "diamond-strike",
      },
      {
        id: 5,
        image: MasterJoker,
        slug: "master-joker",
      },
      {
        id: 6,
        image: Super7s,
        slug: "super-7s",
      },
    ],
  },
];

export default gamesList;
