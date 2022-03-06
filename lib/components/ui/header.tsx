import React, { Fragment } from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "@emotion/styled";
import NavLinkButton from "../navBarButton";
import SideBar from "./sidebar";
import Constants from "../../utility/constants";

const navLinks = Constants.NAV_LINKS;

const socialLinks: any = {
  Facebook: {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/naturesfrontierlandscaping",
  },
  Instagram: {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/nflandscapeconstruction/",
  },
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
      margin-right: 10px;
    }
  }
  .menu-icon {
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 600px) {
    .nav-col {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    .menu-icon {
      display: none;
    }
  }
`;

const Header = () => {
  const createNavLinks = () => {
    return Object.keys(navLinks).map((item: string, index: number) => {
      return (
        <Grid key={index} className="nav-item" item>
          <NavLinkButton newTab={false} to={navLinks[item as keyof typeof navLinks]}>
            <Typography>{item}</Typography>
          </NavLinkButton>
        </Grid>
      );
    });
  };

  const createSocialLinks = () => {
    return Object.keys(socialLinks).map((item: string, index: number) => {
      return (
        <Grid key={index} className="nav-item" item>
          <NavLinkButton newTab to={socialLinks[item as keyof typeof socialLinks].url}>
            {socialLinks[item].icon}
          </NavLinkButton>
        </Grid>
      );
    });
  };

  return (
    <Fragment>
      <BaseAppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Grid item xs={6} sm={3} md={2}>
            <NavLinkButton to="/" newTab={false}>
              <img src="logo.png" width="120px" alt="nfl logo" />
            </NavLinkButton>
          </Grid>
          <StyledNav>
            <Grid className="nav-col" item>
              {createNavLinks()}
            </Grid>
            <Grid className="nav-col" item>
              {createSocialLinks()}
            </Grid>
            <Grid className="menu-icon" item>
              <SideBar />
            </Grid>
          </StyledNav>
        </Toolbar>
      </BaseAppBar>
    </Fragment>
  );
};

export default Header;
