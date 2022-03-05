import type { NextPage } from "next";
import PageHeader from "../lib/components/pageHeader";
import ServiceCard from "../lib/components/serviceCard";
import Constants from "../lib/utility/constants";

const Services: NextPage = () => {
  const services = Constants.SERVICES;
  return (
    <div>
      <main>
        <PageHeader title="Services" />

        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </main>
    </div>
  );
};

export default Services;
