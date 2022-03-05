import { Fragment } from "react";

interface Item {
  title: string
}

interface ServiceCardProps {
  item: Item
}

const ServiceCard = ({item }: ServiceCardProps) => {
  return (
    <Fragment>
      <p>{item.title}</p>
    </Fragment>
  );
};

export default ServiceCard;
