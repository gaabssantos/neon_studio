import Casino from "../../assets/icons/navbar/casino.svg";
import LoginImg from "../../assets/icons/navbar/login.svg";
import Menu from "../../assets/icons/navbar/menu.svg";
import Sports from "../../assets/icons/navbar/sports.svg";
import Logo from "../../assets/logo.png";
import { ButtonApp } from "../index";
import {
  Container,
  Title,
  Item,
  ItemContent,
  Divisor,
  Login,
  Signup,
} from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="first-column">
        <img src={Logo} alt="logo-neon" />
        <Title>Neon Studio</Title>
        <img className="menu" src={Menu} alt="menu-hamburger" />
        <Item>
          <ItemContent>
            <img src={Casino} alt="navbar-cassino" />
            <p>Cassino</p>
          </ItemContent>
          <Divisor $isactive={true} />
        </Item>
        <Item>
          <ItemContent>
            <img src={Sports} alt="navbar-esportes" />
            <p>Esportes</p>
          </ItemContent>
          <Divisor $isactive={false} />
        </Item>
      </div>
      <Login>
        <Signup>Registre-se</Signup>
        <ButtonApp>
          <img src={LoginImg} alt="login" />
          Entrar
        </ButtonApp>
      </Login>
    </Container>
  );
};
