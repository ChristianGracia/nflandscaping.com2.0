import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import { CAROUSEL_SLIDES } from "../lib/utility/constants";
import CarouselSlide from "../lib/components/carouselSlide";

const Home: NextPage = () => {
  const carouselSlides = CAROUSEL_SLIDES;
  const StyledContainer = styled.div``;
  return (
    <div>
      <main className="main">
        <StyledContainer>
          <Carousel
            autoPlay={false}
            interval={4000}
            stopAutoPlayOnHover={true}
            indicatorIconButtonProps={{
              style: {
                position: "relative",
                color: "grey",
                top: -40,
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "white",
              },
            }}
          >
            {carouselSlides.map((item, i) => (
              <CarouselSlide key={i} item={item} />
            ))}
          </Carousel>
        </StyledContainer>
      </main>
    </div>
  );
};

export default Home;
