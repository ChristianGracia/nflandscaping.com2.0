import * as React from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import NavLinkButton from "../navBarButton";

const navLinks: any = {
  services: "services",
  "about us": "about",
  gallery: "/gallery",
  contact: "/contact",
};

const Header = () => {
  const createNavLinks = () => {
    return Object.keys(navLinks).map((item: string) => {
      return (
        <Grid item>
          <NavLinkButton to={navLinks[item] as String}>
            <Typography>{item}</Typography>
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
              <NavLinkButton variant="contained" to="/">
                <img src="logo1.png" width="120px" />
              </NavLinkButton>
            </Grid>
            {createNavLinks()}
            {/* <Grid item>
              <RoomIcon />
            </Grid> */}

            {/* <Grid item className={classes.menuButtonsContainer}>
                                <Grid
                                    item
                                    className={classes.menuButtonContainer}
                                >
                                    <NavLinkButton
                                        className={classes.menuButton}
                                        to="/services"
                                    >
                                        <Typography>Services</Typography>
                                    </NavLinkButton>
                                </Grid>
                                <Grid
                                    item
                                    className={classes.menuButtonContainer}
                                >
                                    <NavLinkButton
                                        className={classes.menuButton}
                                        to="/gallery"
                                    >
                                        <Typography>Gallery</Typography>
                                    </NavLinkButton>
                                </Grid>
                                <Grid
                                    item
                                    className={classes.menuButtonContainer}
                                >
                                    <NavLinkButton
                                        className={classes.menuButton}
                                        to="/about"
                                    >
                                        <Typography>About Us</Typography>
                                    </NavLinkButton>
                                </Grid>
                                <Grid
                                    item
                                    className={classes.menuButtonContainer}
                                >
                                    <NavLinkButton
                                        className={classes.menuButton}
                                        to="/contact"
                                    >
                                        <Typography>Contact</Typography>
                                    </NavLinkButton>
                                </Grid>
                            </Grid> */}
            {/* <Grid item className={classes.socialMediaContainer}>
                                <Grid
                                    item
                                    className={classes.menuButtonContainer}
                                >
                                    <NavLinkButton
                                        className={classes.menuButton}
                                        to="/"
                                    >
                                        insta + fb
                                    </NavLinkButton>
                                </Grid>
                            </Grid> */}
          </Grid>
        </Toolbar>
      </BaseAppBar>
    </React.Fragment>
  );
};

export default Header;
