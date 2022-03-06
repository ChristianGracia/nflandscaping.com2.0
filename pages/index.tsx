import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import Constants from "../lib/utility/constants";
import CarouselSlide from "../lib/components/carouselSlide";

const Home: NextPage = () => {
  const carouselSlides = Constants.CAROUSEL_SLIDES;
  const CarouselContainer = styled.div``;
  return (
    <div>
      <main>
        <CarouselContainer>
          <Carousel>
            {carouselSlides.map((item, i) => (
              <CarouselSlide key={i} item={item} />
            ))}
          </Carousel>
        </CarouselContainer>
      </main>
    </div>
  );
};

export default Home;
