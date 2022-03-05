import React from "react";

const ServiceCard = (props: any)  => {
  return (
    <React.Fragment>
        <p>{props.item.title}</p>
    </React.Fragment>
  );
};

export default ServiceCard;
