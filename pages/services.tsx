import Box from "@mui/material/Box";
import type { NextPage } from "next";
import Main from "../lib/components/ui/main";
import PageHeader from "../lib/components/pageHeader";
import ServiceCard from "../lib/components/serviceCard";
import { SERVICES } from "../lib/utility/constants";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import GrassIcon from "@mui/icons-material/Grass";
import DeckIcon from "@mui/icons-material/Deck";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WashIcon from "@mui/icons-material/Wash";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import WaterIcon from "@mui/icons-material/Water";
import FenceIcon from "@mui/icons-material/Fence";
import ConstructionIcon from "@mui/icons-material/Construction";
const icons = {
  WaterfallChartIcon: <WaterfallChartIcon sx={{ color: "#949494", m: 1 }} />,
  GrassIcon: <GrassIcon sx={{ color: "green", m: 1 }} />,
  DeckIcon: <DeckIcon sx={{ color: "#B37A4C", m: 1 }} />,
  AcUnitIcon: <AcUnitIcon sx={{ color: "#A5F2F3", m: 1 }} />,
  DeleteSweepIcon: <DeleteSweepIcon sx={{ color: "black", m: 1 }} />,
  PrecisionManufacturingIcon: (
    <PrecisionManufacturingIcon sx={{ color: "#949494", m: 1 }} />
  ),
  WashIcon: <WashIcon sx={{ color: "#00ABFF", m: 1 }} />,
  CastForEducationIcon: (
    <CastForEducationIcon sx={{ color: "#9C6137", m: 1 }} />
  ),
  WaterIcon: <WaterIcon sx={{ color: "blue", m: 1 }} />,
  FenceIcon: <FenceIcon sx={{ color: "#949494", m: 1 }} />,
  ConstructionIcon: <ConstructionIcon sx={{ color: "#CC9966", m: 1 }} />,
};

const Services: NextPage = () => {
  const services = SERVICES;
  return (
    <Main>
      <div>
        <PageHeader title="Services" />
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {services.map((item, i) => (
            <ServiceCard
              key={i}
              item={item}
              Icon={icons[item.icon as keyof typeof icons]}
            />
          ))}
        </Box>
      </div>
    </Main>
  );
};

export default Services;
