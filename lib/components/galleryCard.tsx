import Typography from "@mui/material/Typography";
import { Fragment } from "react";

interface Item {
  title: string;
}

interface GalleryCardProps {
  item: Item;
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  return (
    <Fragment>
      <Typography component="p">{item.title}</Typography>
    </Fragment>
  );
};

export default GalleryCard;
