import { SideMenu } from "../../components";
import Casino from "../Casino";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <SideMenu />
      <Casino />
    </Container>
  );
};

export default Home;
