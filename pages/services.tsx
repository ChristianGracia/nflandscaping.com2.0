import type { NextPage } from "next";
import ServiceCard from "../lib/components/serviceCard";
import Constants from "../lib/utility/constants";

const Services: NextPage = () => {
  const services = Constants.SERVICES;
  return (
    <div>
      <main>
        <h1>
          Welcome to <a>Services</a>
        </h1>
        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </main>
    </div>
  );
};

export default Services;
