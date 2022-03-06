import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Constants from "../utility/constants";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Item {
  image: string;
  description: string;
}
interface CarouselSlideProps {
  item: Item;
}

const CarouselSlide = ({ item }: CarouselSlideProps) => {
  const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(/images/carousel-images/${item.image});
    .button-div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .image-button {
        margin: 10px;
      }
    }
  `;
  return (
    <StyledContainer>
      {/* <p>{props.item.title}</p> */}
      {item.description && (
        <Typography component="p">{item.description}</Typography>
      )}

      <Box className="button-div">
        <Button variant="contained" className="image-button callButton">
          {Constants.PHONE_NUMBER}
        </Button>
        <Button variant="contained" className="image-button estimateButton">
          Free Estimate
        </Button>
      </Box>
      <Typography component="p">0% In-house Financing Available</Typography>
    </StyledContainer>
  );
};

export default CarouselSlide;
