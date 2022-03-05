import { Fragment } from "react";

const ServiceCard = (props: any) => {
  return (
    <Fragment>
      <p>{props.item.title}</p>
    </Fragment>
  );
};

export default ServiceCard;
