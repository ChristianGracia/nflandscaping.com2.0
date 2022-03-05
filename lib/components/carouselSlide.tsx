
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Constants from "../utility/constants";

interface Item {
  image: string,
  description: string,
}
interface CarouselSlideProps {
  item: Item
}

const CarouselSlide = ({item}: CarouselSlideProps) => {
  const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(/images/${item.image});
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
    <ImageContainer>
      {/* <p>{props.item.title}</p> */}
      {item.description && <p>{item.description}</p>}

      <div className="button-div">
        <Button variant="contained" className="image-button callButton">
          {Constants.PHONE_NUMBER}
        </Button>
        <Button variant="contained" className="image-button estimateButton">
          Free Estimate
        </Button>
      </div>
      <p>0% In-house Financing Available</p>
    </ImageContainer>
  );
};

export default CarouselSlide;
