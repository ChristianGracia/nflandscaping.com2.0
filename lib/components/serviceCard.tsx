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
  width: 40vw;
  min-width: 280px;
  max-width: 500px;
  height: 330px;
  flex: 1 1 auto;
  display: flex;
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

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    .service-text {
      margin-right: 5px;
    }
  }
  `);
  return (
    <StyledContainer>
      <Card>
        <CardMedia
          className="background-image"
          component="img"
          // height="140"
          width="100%"
          max-width=""
          image={`images/services-list/${item.image}`}
          alt="service image"
        />
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="service-text" component="p">
              {item.title}
            </Typography>
            {Icon}
          </Box>
        </CardContent>
      </Card>
    </StyledContainer>
  );
};

export default ServiceCard;
