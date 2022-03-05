import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import ContactForm from "../lib/components/contactForm";
import PageHeader from "../lib/components/pageHeader";
import Constants from "../lib/utility/constants";

const Contact: NextPage = () => {
  return (
    <div>
      <main>
        <PageHeader title="Contact Us" />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="p">{Constants.PHONE_NUMBER}</Typography>
          <Typography component="p">{Constants.EMAIL}</Typography>
          <Typography component="p">Available 24/7</Typography>
        </Box>
        <ContactForm />
        <Box display="flex" flexDirection="column" alignItems="center">
          <iframe
            title="nflandscaping location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.3856875883093!2d-71.35262728526868!3d41.81999237922684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e45b7fe89d3c6b%3A0x21555fc05f23db39!2sNatures%20Frontier%20Landscaping%20Construction%20%26%20Property%20Management!5e0!3m2!1sen!2sus!4v1580445738200!5m2!1sen!2sus"
            width="300"
            height="300"
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </Box>
      </main>
    </div>
  );
};

export default Contact;
