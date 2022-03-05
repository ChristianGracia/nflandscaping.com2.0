import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";
import Constants from "../lib/utility/constants";
import CarouselSlide from "../lib/components/carouselSlide";

// import image1 from "../public/images/homeBackground.jpeg";
// import image2 from "../public/images/homeBackground1.jpeg";
// import image3 from "../public/images/homeBackground3.jpeg";
// import image4 from "../public/images/homeBackground4.jpg";
// import image5 from "../public/images/homeBackground5.jpg";

const Home: NextPage = () => {
  var carouselSlides = Constants.CAROUSEL_SLIDES;
  return (
    <div>
      <main>
        <h1>
          Welcome to <a>Home</a>
        </h1>
        <Carousel>
          {carouselSlides.map((item, i) => (
            <CarouselSlide key={i} item={item} />
          ))}
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
