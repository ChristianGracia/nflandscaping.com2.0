const API = {
  API_URL: "https://christiangracia-api.herokuapp.com/",
  LOCAL_API_URL: "http://localhost:3000/",
  STAGING_API_URL: "http://christiangracia-api-staging.herokuapp.com/",
  PROD_API_URL: "https://christiangracia-api.herokuapp.com/",
};
const PHONE_NUMBER = "401-447-5446";

const EMAIL = "naturesfrontierlandscaping@gmail.com";

// NAV LINKS
const NAV_LINKS = {
  Services: {
    url: "/services",
    icon: "DesignServicesIcon",
  },
  "About Us": {
    url: "/about",
    icon: "PersonPinIcon",
  },
  Gallery: {
    url: "/gallery",
    icon: "CollectionsIcon",
  },
  Contact: {
    url: "/contact",
    icon: "MailIcon",
  },
};

// HOME
const CAROUSEL_SLIDES = [
  {
    title: "Committed to Excellence",
    description:
      "With over 10 years of experience, we work with our clients to make their ideas come true",

    image: "homeBackground1.jpeg",
  },
  {
    title: "Jobs Big or Small, We Got You Covered",
    description: "",
    image: "homeBackground2.jpeg",
  },
  {
    title: "Making RI and MA Greener One Landscape at a Time",
    description: "",
    image: "homeBackground3.jpeg",
  },
  {
    title: "Providing Residential, State, and Commercial Services",
    description: "",
    image: "homeBackground4.jpg",
  },
  {
    title: "Build Your Dream Project Today",
    description: "",
    image: "homeBackground5.jpg",
  },
];

//SERVICES
const SERVICES = [
  {
    title: "Demolition",
    image: "demolition.jpg",
    icon: "WaterfallChartIcon",
  },
  {
    title: "Full Landscaping Services",
    image: "landscaping-service.jpg",
    icon: "GrassIcon",
  },
  {
    title: "Property Management",
    image: "property-management.jpg",
    icon: "DeckIcon",
  },
  {
    title: "Snow Removal",
    image: "snow-removal.jpg",
    icon: "AcUnitIcon",
  },
  {
    title: "Trash Removal / Estate Cleanout",
    image: "trash.jpg",
    icon: "DeleteSweepIcon",
  },
  {
    title: "Bobcat Services",
    image: "bobcat.jpg",
    icon: "PrecisionManufacturingIcon",
  },
  {
    title: "Power Washing",
    image: "powerwashing.jpg",
    icon: "WashIcon",
  },
  {
    title: "Consulting",
    image: "consulting.jpg",
    icon: "CastForEducationIcon",
  },
  {
    title: "Irrigation",
    image: "irrigation.jpg",
    icon: "WaterIcon",
  },
  {
    title: "Fencing",
    image: "fencing.jpg",
    icon: "FenceIcon",
  },
  {
    title: "Home Improvement",
    image: "home-improvement.jpeg",
    icon: "ConstructionIcon",
  },
];
// ABOUT PAGE
const ABOUT_TEXT = {
  CUT_CORNER_TEXT: "We don't cut corners, just wood.",
  FOUNDER_QUOTE_1:
    "At Nature's Frontier Landscaping, our goal is to cater to all of our customers household needs.",
  FOUNDER_QUOTE_2:
    "Everything from landscaping to moving a couch. We want to make YOU the customer's life simpler and effortless.",
  WORK_TEXT: "We do Residential, Commercial, and State work.",
};

//GALLERY
//CONTACT
const CONTACT_TEXT = {
  ESTIMATE_TEXT: "Leave us a message for a free estimate!",
};

export {
  API,
  PHONE_NUMBER,
  EMAIL,
  NAV_LINKS,
  CAROUSEL_SLIDES,
  SERVICES,
  ABOUT_TEXT,
  CONTACT_TEXT,
};
