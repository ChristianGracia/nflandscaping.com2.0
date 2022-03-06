import Box from "@mui/material/Box";
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
        <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
        </Box>
      </main>
    </div>
  );
};

export default Services;
