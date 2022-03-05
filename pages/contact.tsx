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
        <PageHeader title="Contact Us"/>
        <Box display="flex" flexDirection="column" alignItems="center" >
          <Typography component="p">{Constants.PHONE_NUMBER}</Typography>
          <Typography component="p">{Constants.EMAIL}</Typography>
          <Typography component="p">Available 24/7</Typography>
        </Box>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
