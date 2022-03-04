/** @jsxImportSource @emotion/react */
import * as React from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import styled from '@emotion/styled';
import NavLinkButton from "../navBarButton";
import { css } from '@emotion/react'

const navLinks: any = {
  Services: "/services",
  "About Us": "/about",
  Gallery: "/gallery",
  Contact: "/contact",
};

const socialLinks: any = {

  instagram: {
    icon: 'i',
    url: 'https://instagram.com'
  },
  facebook: {
    icon: 'f',
    url: 'https://facebook.com'
  },
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        &:hover {
          color: grey;
        }
    }
`;

const StyledSiteLinks = styled(Grid)`
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    width: 30%;
`;

const StyledSocialLinks = styled(Grid)`
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    width: 30%;
`;

const Header = () => {
  const createNavLinks = () => {
    return Object.keys(navLinks).map((item: string, index: number) => {
      return (
        <StyledSiteLinks key={index} item>
          <NavLinkButton to={navLinks[item] as String}>
            <Typography>{item}</Typography>
          </NavLinkButton>
        </StyledSiteLinks>
      );
    });
  };

  const createSocialLinks = () => {
    return Object.keys(socialLinks).map((item: string, index: number) => {
      return (
        <StyledSocialLinks key={index} item>
          <NavLinkButton to={socialLinks[item].url as String} className="nav-link">
            <Typography>{socialLinks[item].icon}</Typography>
          </NavLinkButton>
          </StyledSocialLinks>
      );
    });
  };

  return (
    <React.Fragment>
      <BaseAppBar position="static">
        <Toolbar>
            <Grid item xs={6} sm={3} md={2}>
              <NavLinkButton to="/">
                <img src="logo1.png" width="120px" />
              </NavLinkButton>
            </Grid>
            <StyledNav>
            {createNavLinks()}
            {createSocialLinks()}
            {/* <Grid item>
              <RoomIcon />
            </Grid> */}
          </StyledNav>
        </Toolbar>
      </BaseAppBar>
    </React.Fragment>
  );
};


export default Header;
