import Banner from "../../assets/casino/casino-banner.png";
import MagnifyingGlass from "../../assets/casino/magnifying_glass.svg";
import { Games } from "../../components";
import categories from "./categories-list";
import recommended from "./recommended-list";
import {
  Container,
  Image,
  InputControl,
  Input,
  Categories,
  Category,
  CategoryName,
  Recommended,
  RecommendedTitle,
  RecommendedImages,
  RecommendedImage,
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
      <Recommended>
        <RecommendedTitle>Recomendados</RecommendedTitle>
        <RecommendedImages>
          {recommended.map((recom) => (
            <RecommendedImage
              key={recom.id}
              src={recom.image}
              alt={recom.slug}
            />
          ))}
        </RecommendedImages>
      </Recommended>
      <Games />
    </Container>
  );
};

export default Casino;
