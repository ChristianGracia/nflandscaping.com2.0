import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

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
      <h2>{props.item.title}</h2>
      {props.item.description && (<p>{props.item.description}</p>)}

      <div className='button-div'>
        <Button variant='contained' className="image-button callButton">401-447-5446</Button>
        <Button  variant='contained' className="image-button estimateButton">Free Estimate</Button>
      </div>
    </ImageContainer>
  );
};

export default CarouselSlide;
