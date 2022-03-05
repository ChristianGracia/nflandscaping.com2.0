import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Constants from "../utility/constants";

const CarouselSlide = (props: any) => {
  const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(/images/${props.item.image});
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
      {props.item.description && <p>{props.item.description}</p>}

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
