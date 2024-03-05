import { useLocation } from "react-router-dom";

import { SideMenu } from "../../components";
import Casino from "../Casino";
import Sports from "../Sports";
import { Container } from "./styles";

const Home = () => {
  const location = useLocation();

  return (
    <Container>
      <SideMenu />
      {location.pathname === "/" ? <Casino /> : <Sports />}
    </Container>
  );
};

export default Home;
