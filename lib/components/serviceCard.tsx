import Typography from "@mui/material/Typography";
import { Fragment } from "react";

interface Item {
  title: string;
}

interface ServiceCardProps {
  item: Item;
}

const ServiceCard = ({ item }: ServiceCardProps) => {
  return (
    <Fragment>
      <Typography component="p">{item.title}</Typography>
    </Fragment>
  );
};

export default ServiceCard;
