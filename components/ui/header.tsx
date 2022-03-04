import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles
} from "@mui/material";

import RoomIcon from '@mui/icons-material/Room';



const Header = () => {

        return (
            <React.Fragment>
                <BaseAppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid
                                item
                               
                                xs={6}
                                sm={3}
                                md={2}
                            >
                                {/* <NavLinkButton
                                    className={classes.menuButton}
                                    variant="contained"
                                    to="/"
                                >
                                    <img
                                        className={classes.logoImage}
                                        src={img}
                                    />
                                </NavLinkButton> */}
                            </Grid>
                            <Grid item >
                            <RoomIcon />
                                {/* <Grid container className={classes.navToggler}>
                                    <Grid className={classes.navToggle}></Grid>
                                    <Grid className={classes.navToggle}></Grid>
                                    <Grid className={classes.navToggle}></Grid>
                                </Grid> */}
                            </Grid>
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
}

export default Header;
