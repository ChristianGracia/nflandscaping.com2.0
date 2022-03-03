// import * as React from "react";
// // import {
// //     AppBar as BaseAppBar,
// //     Typography,
// //     Grid,
// //     Toolbar,
// //     withStyles
// // } from "@mui/material";

// import NavLinkButton from "common/components/NavLinkButton/NavLinkButton.component";
// import style from "./AppBar.style";
// import img from "../../../../assets/logo1.png";
// import RoomIcon from '@mui/icons-material/Room';

// interface AppBarProps {
//     classes: any;
// }

// class AppBar extends React.Component<AppBarProps> {
//     constructor(props: AppBarProps) {
//         super(props);
//     }

//     public render() {
//         const { classes } = this.props;

//         return (
//             <React.Fragment>
//                 <BaseAppBar position="static" className={classes.navContainer}>
//                     <Toolbar>
//                         <Grid container className={classes.gridContainer}>
//                             <Grid
//                                 item
//                                 className={classes.homeButtonContainer}
//                                 xs={6}
//                                 sm={3}
//                                 md={2}
//                             >
//                                 <NavLinkButton
//                                     className={classes.menuButton}
//                                     variant="contained"
//                                     to="/"
//                                 >
//                                     <img
//                                         className={classes.logoImage}
//                                         src={img}
//                                     />
//                                 </NavLinkButton>
//                             </Grid>
//                             <Grid item className={classes.navGrid}>
//                             <RoomIcon />
//                                 {/* <Grid container className={classes.navToggler}>
//                                     <Grid className={classes.navToggle}></Grid>
//                                     <Grid className={classes.navToggle}></Grid>
//                                     <Grid className={classes.navToggle}></Grid>
//                                 </Grid> */}
//                             </Grid>
//                             {/* <Grid item className={classes.menuButtonsContainer}>
//                                 <Grid
//                                     item
//                                     className={classes.menuButtonContainer}
//                                 >
//                                     <NavLinkButton
//                                         className={classes.menuButton}
//                                         to="/services"
//                                     >
//                                         <Typography>Services</Typography>
//                                     </NavLinkButton>
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     className={classes.menuButtonContainer}
//                                 >
//                                     <NavLinkButton
//                                         className={classes.menuButton}
//                                         to="/gallery"
//                                     >
//                                         <Typography>Gallery</Typography>
//                                     </NavLinkButton>
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     className={classes.menuButtonContainer}
//                                 >
//                                     <NavLinkButton
//                                         className={classes.menuButton}
//                                         to="/about"
//                                     >
//                                         <Typography>About Us</Typography>
//                                     </NavLinkButton>
//                                 </Grid>
//                                 <Grid
//                                     item
//                                     className={classes.menuButtonContainer}
//                                 >
//                                     <NavLinkButton
//                                         className={classes.menuButton}
//                                         to="/contact"
//                                     >
//                                         <Typography>Contact</Typography>
//                                     </NavLinkButton>
//                                 </Grid>
//                             </Grid> */}
//                             {/* <Grid item className={classes.socialMediaContainer}>
//                                 <Grid
//                                     item
//                                     className={classes.menuButtonContainer}
//                                 >
//                                     <NavLinkButton
//                                         className={classes.menuButton}
//                                         to="/"
//                                     >
//                                         insta + fb
//                                     </NavLinkButton>
//                                 </Grid>
//                             </Grid> */}
//                         </Grid>
//                     </Toolbar>
//                 </BaseAppBar>
//             </React.Fragment>
//         );
//     }
// }

// export default withStyles(style)(AppBar);
