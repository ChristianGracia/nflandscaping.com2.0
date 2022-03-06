import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { PHONE_NUMBER } from "../utility/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    height: calc(100vh - 114px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(/images/carousel-images/${item.image});
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .button-div {
      display: flex;
      flex-direction: row;
      justify-content: center;
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
      font-size: 22px;
      @media only screen and (min-width: 650px) {
        font-size: 32px;
      }
    }
  `;
  return (
    <StyledContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography component="h2" className="item-title">
          {item.title}
        </Typography>
        {item.description && (
          <Typography
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
              fontSize: 16,
            }}
            className="item-description"
          >
            {item.description}
          </Typography>
        )}
      </Box>

      <Box className="button-div">
        <Button variant="contained" className="image-button callButton">
          <Typography component="p">{PHONE_NUMBER}</Typography>
        </Button>
        <Button variant="contained" className="image-button estimateButton">
          Free Estimate
        </Button>
      </Box>
      <Typography component="p" sx={{ color: "white", textAlign: "center" }}>
        0% In-house Financing Available
      </Typography>
    </StyledContainer>
  );
};

export default CarouselSlide;
