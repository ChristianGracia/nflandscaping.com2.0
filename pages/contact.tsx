import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import type { NextPage } from "next";
import ContactForm from "../lib/components/contactForm";
import PageHeader from "../lib/components/pageHeader";
import { PHONE_NUMBER, EMAIL } from "../lib/utility/constants";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NavLinkButton from "../lib/components/navBarButton";
import Main from "../lib/components/ui/main";
const Contact: NextPage = () => {
  return (
    <Main>
      <div>
        <PageHeader title="Contact Us" />
        <Box sx={{ paddingBottom: 10 }}>
          <Paper
            sx={{
              width: "90%",
              maxWidth: 800,
              margin: "0 auto",
              paddingBottom: 2,
            }}
            elevation={15}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ marginTop: 2 }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{ m: 3 }}
              >
                <LocalPhoneIcon />
                <NavLinkButton newTab={false} to={`tel:${PHONE_NUMBER}`}>
                  <Typography sx={{ fontWeight: "bold", marginLeft: 1 }}>
                    {PHONE_NUMBER}
                  </Typography>
                </NavLinkButton>
              </Box>
              <Box display="flex" flexDirection="row" alignItems="center">
                <MailIcon />
                <NavLinkButton newTab={false} to={`mailto:${EMAIL}`}>
                  <Typography sx={{ fontWeight: "bold", marginLeft: 1 }}>
                    {EMAIL}
                  </Typography>
                </NavLinkButton>
              </Box>
              <Typography component="p" sx={{ m: 3 }}>
                Available 24/7
              </Typography>
            </Box>

            <ContactForm />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ m: 5, paddingBottom: 5 }}
            >
              <iframe
                title="nflandscaping location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.3856875883093!2d-71.35262728526868!3d41.81999237922684!2m3!1f0!2f0!3f0!3m2!1i524!2i768!4f13.1!3m3!1m2!1s0x89e45b7fe89d3c6b%3A0x21555fc05f23db39!2sNatures%20Frontier%20Landscaping%20Construction%20%26%20Property%20Management!5e0!3m2!1sen!2sus!4v1580445738200!5m2!1sen!2sus"
                width="300"
                height="300"
                frameBorder="0"
                allow="fullscreen"
              ></iframe>
            </Box>
          </Paper>
        </Box>
      </div>
    </Main>
  );
};

export default Contact;
