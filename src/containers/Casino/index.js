import Banner from "../../assets/casino/casino-banner.png";
import Sports from "../../assets/casino/icons/sports.svg";
import MagnifyingGlass from "../../assets/casino/magnifying_glass.svg";
import categories from "./categories-list";
import {
  Container,
  Image,
  InputControl,
  Input,
  Categories,
  Category,
  CategoryName,
} from "./styles";

const Casino = () => {
  return (
    <Container>
      <Image src={Banner} alt="banner-do-cassino" />
      <InputControl>
        <img src={MagnifyingGlass} alt="lupa"></img>
        <Input type="text" placeholder="Pesquise um jogo..."></Input>
      </InputControl>
      <Categories>
        {categories.map((category) => (
          <Category key={category.id}>
            <CategoryName>
              <img src={category.image} alt={category.slug}></img>
              <p>{category.name}</p>
            </CategoryName>
          </Category>
        ))}
      </Categories>
    </Container>
  );
};

export default Casino;
