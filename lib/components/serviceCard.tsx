import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

interface Item {
  title: string;
  icon: string;
  image: string;
}

interface ServiceCardProps {
  item: Item;
  Icon: any;
}

const ServiceCard = ({ item, Icon }: ServiceCardProps) => {
  const StyledContainer = styled.div(`
  width: 400px;
  max-width: 99vw;
  height: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 25px;

  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  .service-text {
    margin-right: 5px;
  }
  `);
  return (
    <StyledContainer>
      <Card raised={true}>
        <CardMedia
          className="background-image"
          component="img"
          height="300px"
          width="300px"
          max-width=""
          image={`images/services-list/${item.image}`}
          alt="service image"
        />

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={{ margin: "5px 0" }}
        >
          <Typography className="service-text" component="p">
            {item.title}
          </Typography>
          {Icon}
        </Box>
      </Card>
    </StyledContainer>
  );
};

export default ServiceCard;
