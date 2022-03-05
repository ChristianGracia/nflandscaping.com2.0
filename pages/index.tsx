import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import styled from "@emotion/styled";

// import image1 from "../public/images/homeBackground.jpeg";
// import image2 from "../public/images/homeBackground1.jpeg";
// import image3 from "../public/images/homeBackground3.jpeg";
// import image4 from "../public/images/homeBackground4.jpg";
// import image5 from "../public/images/homeBackground5.jpg";

function Item(props: any) {
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
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <div className='button-div'>
      <Button variant='contained' className="image-button callButton">401-447-5446</Button>
      <Button  variant='contained' className="image-button estimateButton">Free Estimate</Button>
      </div>
    </ImageContainer>
  );
}

const Home: NextPage = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: 'homeBackground.jpeg',
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: 'homeBackground1.jpeg',
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: 'homeBackground3.jpeg',
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: 'homeBackground4.jpg',
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: 'homeBackground5.jpg',
    },
  ];
  return (
    <div>
      <main>
        <h1>
          Welcome to <a>Home</a>
        </h1>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
