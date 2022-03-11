import type { NextPage } from "next";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const Landing: NextPage = () => {
  const StyledContainer = styled.div`
    .backgroundimage {
      z-index: 0;
    }

    .quote {
      color: white;
      font-size: 20px;
      text-align: center;
      max-width: 700px;
      margin-top: 10vh;
      z-index: 1;
    }
    .quoteSign {
      color: #3895d3;
      font-size: 20px;
      margin-top: 3vh;
      margin-bottom: 7vh;
      font-weight: bold;
      z-index: 1;
    }

    .landingButton {
      font-weight: bold;
    }

    @media screen and (min-width: 900px) {
      .landingButton {
        margin-top: 11vh;
      }
      .quote {
        margin-top: 11vh;
      }
    }
  `;
  return (
    <div>
      <main>
        <StyledContainer>
            <Image 
              src="/images/background.png"
              className="background-image"
              alt='picture of lawn'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              placeholder='blur'
              blurDataURL="/images/background.png"
              priority={true}
            />
            <Box
              className="container"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                sx={{
                  marginTop: 10,
                }}
              >
                <Image
                  src="/logo.png"
                  height={110}
                  width={310}
                  alt="nfl logo"
                  
                  priority={true}
                />
              </Box>
              <Typography className="quote" component="span" sx={{ m: 1 }}>
                “We see our customers as invited guests to a party, and we are
                the hosts. It’s our job to make the customer experience a little
                bit better.”
              </Typography>
              <Typography className="quoteSign" component="span">
                -Jeff Bezos, Founder of Amazon
              </Typography>
              <Button
                variant="contained"
                className="landingButton"
                onClick={() => (window.location.href = "/home")}
              >
                <Typography component="span">Join the Party</Typography>
              </Button>
            </Box>
        </StyledContainer>
      </main>
    </div>
  );
};

export default Landing;
