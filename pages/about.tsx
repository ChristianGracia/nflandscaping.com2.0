import type { NextPage } from "next";
import PageHeader from "../lib/components/pageHeader";
import { ABOUT_TEXT } from "../lib/utility/constants";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <main className="main">
        <PageHeader title="About Us" />
        <Typography
          sx={{ textAlign: "center", m: 3, fontSize: 20 }}
          component="h4"
        >
          {ABOUT_TEXT.CUT_CORNER_TEXT}
        </Typography>
        <Paper sx={{ maxWidth: "90vw", margin: "0 auto", p: 2 }}>
          <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
            <img
              src="images/about-us.jpg"
              width="100%"
              alt="Picture of founder"
            />
            {/* <Image
              src="/images/about-us.jpg"
              layout={'fill'}
              
              height={300}
             
              alt="Picture of founder"
            /> */}
          </Box>
          <Paper sx={{ maxWidth: 500, margin: "20px auto" }}>
            <Box
              sx={{ maxWidth: 500, margin: "0 auto", p: 2 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h4" sx={{ m: 2 }}>
                {ABOUT_TEXT.FOUNDER_QUOTE_1}
              </Typography>
              <Typography component="h4" sx={{ m: 2 }}>
                {ABOUT_TEXT.FOUNDER_QUOTE_2}
              </Typography>
              <Typography component="h4">Founder</Typography>
            </Box>
          </Paper>
        </Paper>
        <Typography
          sx={{ textAlign: "center", paddingBottom: 10, m: 2 }}
          component="h4"
        >
          {ABOUT_TEXT.WORK_TEXT}
        </Typography>
      </main>
    </div>
  );
};

export default About;
