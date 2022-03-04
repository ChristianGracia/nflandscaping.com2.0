import React, { useState, useEffect } from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import NavLinkButton from "../navBarButton";

const navLinks: any = {
  Services: "/services",
  "About Us": "/about",
  Gallery: "/gallery",
  Contact: "/contact",
};

const socialLinks: any = {
  Instagram: {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/nflandscapeconstruction/",
  },
  Facebook: {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/naturesfrontierlandscaping",
  },
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
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
          <NavLinkButton to={navLinks[item] as String}>
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
          <NavLinkButton newTab to={socialLinks[item].url as String}>
            {socialLinks[item].icon}
          </NavLinkButton>
        </Grid>
      );
    });
  };

  return (
    <React.Fragment>
      <BaseAppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Grid item xs={6} sm={3} md={2}>
            <NavLinkButton to="/">
              <img src="logo1.png" width="120px" />
            </NavLinkButton>
          </Grid>
          <StyledNav>
            <Grid className="nav-col" item>
              {createNavLinks()}
            </Grid>
            <Grid className="nav-col" item>
              {createSocialLinks()}
            </Grid>
            {
              <Grid className="menu-icon" item>
                <NavLinkButton to="/">
                  <MenuIcon />
                </NavLinkButton>
              </Grid>
            }
          </StyledNav>
        </Toolbar>
      </BaseAppBar>
    </React.Fragment>
  );
};

export default Header;
