import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Item {
  title: string;
  icon: string;
  image: string;
}

interface ServiceCardProps {
  item: Item;
}

const ServiceCard = ({ item }: ServiceCardProps) => {
  const StyledCard = styled.div(`
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
  }
  `)
  return (
    <StyledCard>
      <Card>
        <CardMedia
        className="background-image"
          component="img"
          // height="140"
          width="100%"
          max-width=""
          image={`images/${item.image}`}
          alt="service image"
        />
        <CardContent>
          <Typography component="p">{item.title}</Typography>
        </CardContent>
      </Card>
    </StyledCard>
  );
};

export default ServiceCard;
