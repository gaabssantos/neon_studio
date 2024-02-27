import casino from "../../assets/icons/navbar/casino.svg";
import login from "../../assets/icons/navbar/login.svg";
import menu from "../../assets/icons/navbar/menu.svg";
import sports from "../../assets/icons/navbar/sports.svg";
import logo from "../../assets/logo.png";
import {
  Container,
  Title,
  Item,
  ItemContent,
  Divisor,
  Login,
  Signin,
  Signup,
} from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="first-column">
        <img src={logo} alt="logo-neon" />
        <Title>Neon Studio</Title>
        <img className="menu" src={menu} alt="menu-hamburger" />
        <Item>
          <ItemContent>
            <img src={casino} alt="navbar-cassino" />
            <p>Cassino</p>
          </ItemContent>
          <Divisor isActive={true} />
        </Item>
        <Item>
          <ItemContent>
            <img src={sports} alt="navbar-esportes" />
            <p>Esportes</p>
          </ItemContent>
          <Divisor isActive={false} />
        </Item>
      </div>
      <Login>
        <Signup>Registre-se</Signup>
        <Signin>
          <img src={login} alt="login" />
          Entrar
        </Signin>
      </Login>
    </Container>
  );
};
