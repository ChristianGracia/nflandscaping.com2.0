import Typography from "@mui/material/Typography";
import { Fragment } from "react";

interface Item {
  title: string;
}

interface GallerySectionCardProps {
  item: Item;
}

const GallerySectionCard = ({ item }: GallerySectionCardProps) => {
  return (
    <Fragment>
      <Typography component="p">{item.title}</Typography>
    </Fragment>
  );
};

export default GallerySectionCard;
