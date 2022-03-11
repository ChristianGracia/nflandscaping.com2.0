import type { NextPage } from "next";
import PageHeader from "../lib/components/pageHeader";
import { ABOUT_TEXT } from "../lib/utility/constants";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";
import Main from "../lib/components/ui/main";
import styled from "@emotion/styled";
import WaveText from "../lib/components/waveText";

const About: NextPage = () => {
  const StyledContainer = styled.div(`
  .estimate-text {
    text-align: center;
    font-size: 18px;
    @media only screen and (min-width: 600px) {
      font-size: 25px;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 1000px) {
    font-size: 40px;
  }
  }`);

  return (
    <StyledContainer>
      <Main>
        <PageHeader title="About Us" />
        <Box
          sx={{ margin: 2 }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <WaveText text={ABOUT_TEXT.CUT_CORNER_TEXT} fontSize={24} />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ maxWidth: 500, margin: "10px auto" }}
        >
          <img src="images/about-us.jpg" width="95%" alt="Picture of founder" />
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <Paper sx={{ width: 700, maxWidth: "96vw", margin: "20px auto" }}>
            <Box
              sx={{ maxWidth: 500, margin: "0 auto", p: 2 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography component="h4" sx={{ m: 2, fontSize: 20 }}>
                {ABOUT_TEXT.FOUNDER_QUOTE_1}
              </Typography>
              <Typography component="h4" sx={{ m: 2, fontSize: 20 }}>
                {ABOUT_TEXT.FOUNDER_QUOTE_2}
              </Typography>
              <Typography
                component="h4"
                sx={{ m: 2, fontSize: 14, color: "grey" }}
              >
                - Founder
              </Typography>
            </Box>
          </Paper>
        </Box>
        {/* </Paper> */}
        <Box sx={{ textAlign: "center", paddingBottom: 10, marginTop: 12 }}>
          <Typography
            sx={{ textAlign: "center", m: 2, fontSize: 20, fontWeight: "bold" }}
            component="span"
          >
            {ABOUT_TEXT.WORK_TEXT}
          </Typography>
        </Box>
      </Main>
    </StyledContainer>
  );
};

export default About;
