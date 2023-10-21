import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "@emotion/styled";
import NavLinkButton from "../navBarButton";
import SideBar from "./sidebar";
import { NAV_LINKS } from "../../utility/constants";
import Image from "next/image";

const navLinks = NAV_LINKS;

const socialLinks: any = {
  Facebook: {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/naturesfrontierlandscaping",
  },
  Instagram: {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/naturesfrontierenterprise/",
  },
};

const StyledContainer = styled.div`
  background-color: white;
  z-index: 100;
  .nav-container {
    width: 100%;
    a {
      &:hover {
        color: grey;
      }
    }
    .nav-col {
      display: flex;
      flex-direction: row;
      .nav-item {
        margin: 0 8px;
      }
    }
    .menu-icon {
      display: flex;
      width: 100%;
      align-items: flex-end;
      justify-content: flex-end;
    }

    @media only screen and (max-width: 650px) {
      .hidden {
        display: none;
      }
      .nav-col {
        margin-left: 30px;
      }
    }

    @media only screen and (min-width: 650px) {
      .menu-icon {
        display: none;
      }
    }
  }
`;

const Header = () => {
  const createNavLinks = () => {
    return Object.keys(navLinks).map((item: string, index: number) => {
      return (
        <Grid key={index} className="nav-item" item>
          <NavLinkButton
            newTab={false}
            to={navLinks[item as keyof typeof navLinks].url}
          >
            <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
              {item}
            </Typography>
          </NavLinkButton>
        </Grid>
      );
    });
  };

  const createSocialLinks = () => {
    return Object.keys(socialLinks).map((item: string, index: number) => {
      return (
        <Grid key={index} className="nav-item" item>
          <NavLinkButton
            newTab
            to={socialLinks[item as keyof typeof socialLinks].url}
          >
            {socialLinks[item].icon}
          </NavLinkButton>
        </Grid>
      );
    });
  };

  return (
    <StyledContainer>
      <AppBar sx={{ backgroundColor: "white" }} elevation={0} position="fixed">
        <Toolbar>
          <NavLinkButton to="/home" newTab={false}>
            <Image src="/logo.png" height={35} width={120} alt="nfl logo" />
          </NavLinkButton>
          <Box
            className="nav-container"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid sx={{ marginLeft: 4 }} className="nav-col hidden" item>
              {createNavLinks()}
            </Grid>
            <Grid className="nav-col" sx={{ marginTop: 1 }} item>
              {createSocialLinks()}
            </Grid>
            <Grid className="menu-icon" item>
              <SideBar />
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </StyledContainer>
  );
};

export default Header;
