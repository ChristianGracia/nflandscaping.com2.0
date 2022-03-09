import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { PHONE_NUMBER } from "../utility/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import NavLinkButton from "./navBarButton";
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
    width: 100%;
    height: calc(100vh - 89px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(/images/carousel-images/${item.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .button-div {
      max-width: 200px;
      margin: 0 auto;
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
      font-size: 16px;
      @media only screen and (min-width: 650px) {
        font-size: 18px;
      }
    }
    .item-title {
      font-weight: bold;
      color: white;
      text-align: center;
      font-size: 25px;
      @media only screen and (min-width: 650px) {
        font-size: 40px;
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
      // padding: 6px;
      // border-radius: 5px;
  }
    }

    .loading {
      text-align: center;
      span {
        display: inline-block;
        margin: 0 -0.05em;
      }
    }

    .loading-animation {
      span {
        margin: 0 -0.05em;
        animation: loading-animation 0.7s infinite alternate;
        @for $i from 1 through 6 {
          &:nth-of-type(#{$i + 1}) {
            animation-delay: #{$i * 0.1}s;
          }
        }
      }
    }
    @keyframes loading-animation {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }
  `;

  const renderWaveText = () => {
    return "0% In-house Financing Available"
      .split("")
      .map((item: string, index: number) => {
        return (
          <Box
            component="span"
            className="loading loading-animation"
            key={index}
          >
            <Box
              component="span"
              className="loading loading-animation finance-text"
              sx={{ padding: item === " " ? 0.4 : 0.1 }}
            >
              {item}
            </Box>
          </Box>
        );
      });
  };
  return (
    <StyledContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography component="h2" className="item-title">
          {item.title}
        </Typography>
        {item.description && (
          <Typography component="h1" className="item-description">
            {item.description}
          </Typography>
        )}
      </Box>

      <Box className="button-div">
        <Button variant="contained" className="image-button call-button">
          <Box display="flex" flexDirection="row" alignItems="center">
            <LocalPhoneIcon />
            <NavLinkButton newTab={false} to={`tel:${PHONE_NUMBER}`}>
              {PHONE_NUMBER}
            </NavLinkButton>
          </Box>
        </Button>
        <Button variant="contained" className="image-button estimate-button">
          <NavLinkButton newTab={false} to={"/contact"}>
            Free Estimate
          </NavLinkButton>
        </Button>
      </Box>
      {/* <Typography component="p" className="finance-text">
        0% In-house Financing Available
      </Typography> */}
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {renderWaveText()}
      </Box>
    </StyledContainer>
  );
};

export default CarouselSlide;
