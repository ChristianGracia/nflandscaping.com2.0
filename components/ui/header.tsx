import * as React from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import NavLinkButton from "../navBarButton";

const navLinks: any = {
  Services: "services",
  "About Us": "about",
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

const Header = () => {
  const createNavLinks = () => {
    return Object.keys(navLinks).map((item: string, index: number) => {
      return (
        <Grid key={index} item>
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
        <Grid key={index} item>
          <NavLinkButton to={socialLinks[item].url as String}>
            <Typography>{socialLinks[item].icon}</Typography>
          </NavLinkButton>
        </Grid>
      );
    });
  };

  return (
    <React.Fragment>
      <BaseAppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={6} sm={3} md={2}>
              <NavLinkButton to="/">
                <img src="logo1.png" width="120px" />
              </NavLinkButton>
            </Grid>
            {createNavLinks()}
            {createSocialLinks()}
            {/* <Grid item>
              <RoomIcon />
            </Grid> */}
          </Grid>
        </Toolbar>
      </BaseAppBar>
    </React.Fragment>
  );
};

export default Header;
