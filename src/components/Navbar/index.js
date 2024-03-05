import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Casino from "../../assets/icons/navbar/casino.svg";
import LoginImg from "../../assets/icons/navbar/login.svg";
import Menu from "../../assets/icons/navbar/menu.svg";
import Sports from "../../assets/icons/navbar/sports.svg";
import Logo from "../../assets/logo.png";
import { NavbarContext } from "../../context/NavbarContext";
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
  const { showIcons, setShowIcons } = useContext(NavbarContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <div className="first-column">
        <img src={Logo} alt="logo-neon" />
        <Title>Neon Studio</Title>
        <img
          onClick={() => setShowIcons(!showIcons)}
          className="menu"
          src={Menu}
          alt="menu-hamburger"
        />
        <Item>
          <ItemContent onClick={() => navigate("/")}>
            <img src={Casino} alt="navbar-cassino" />
            <p>Cassino</p>
          </ItemContent>
          <Divisor $isactive={location.pathname === "/"} />
        </Item>
        <Item>
          <ItemContent onClick={() => navigate("/esportes")}>
            <img src={Sports} alt="navbar-esportes" />
            <p>Esportes</p>
          </ItemContent>
          <Divisor $isactive={location.pathname === "/esportes"} />
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
