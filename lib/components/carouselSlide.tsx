import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { PHONE_NUMBER } from "../utility/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Image from "next/image";
import NavLinkButton from "./navBarButton";
import WaveText from "./waveText";
interface Item {
  image: string;
  description: string;
  title: string;
}
interface CarouselSlideProps {
  item: Item;
}

const CarouselSlide = ({ item }: CarouselSlideProps) => {
  const StyledContainer = styled.div`
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    z-index: 0;
    .carousel-image {
      filter: brightness(80%)
    }
    .button-div {
      max-width: 200px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media only screen and (min-width: 650px) {
        flex-direction: row;
        max-width: 400px;
      }
      .image-button {
        margin: 10px;
      }
    }
    .item-description {
      color: white;
      font-weight: bold;
      text-align: center;
      margin: 5px;
      z-index: 1;
      font-size: 16px;
      @media only screen and (min-width: 650px) {
        font-size: 18px;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 30px;
      }
    }
    .item-title {
      font-weight: bold;
      color: white;
      text-align: center;
      z-index: 1;
      font-size: 25px;
      @media only screen and (min-width: 650px) {
        font-size: 45px;
      }
      @media only screen and (min-width: 1300px) {
        font-size: 60px;
      }
    }
    .finance-text {
      font-weight: bold;
      color: white;
      text-align: center;
      font-size: 20px;
    }
    .image-button {
      color: black;
      background-color: white;
      font-weight: bold;
      &:hover {
        background-color: white;
      }
  
      padding: 6px;
      border-radius: 5px;
  }
    }

    .call-icon {
      &:hover {
        color: grey;
      }
    }
  `;
  return (
    <StyledContainer>
      <Image
        src={`/images/carousel-images/${item.image}`}
        className="carousel-image"
        alt="carousel image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        blurDataURL={`/images/carousel-images/${item.image}`}
        priority={true}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ marginTop: "23vh" }}
      >
        <Typography component="h2" className="item-title">
          {item.title}
        </Typography>
        {item.description && (
          <Typography component="h1" className="item-description">
            {item.description}
          </Typography>
        )}
      </Box>

      <Box className="button-div call-button" sx={{ marginTop: 10 }}>
        <Button variant="contained" className="image-button">
          <NavLinkButton newTab={false} to={`tel:${PHONE_NUMBER}`}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              className="call-icon"
            >
              <LocalPhoneIcon />
              {PHONE_NUMBER}
            </Box>
          </NavLinkButton>
        </Button>
        <Button variant="contained" className="image-button estimate-button">
          <NavLinkButton newTab={false} to={"/contact"}>
            Free Estimate
          </NavLinkButton>
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <WaveText text="0% In-house Financing Available" fontSize={26} />
      </Box>
    </StyledContainer>
  );
};

export default CarouselSlide;
