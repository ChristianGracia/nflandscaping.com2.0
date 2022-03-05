import { useState, useEffect, Fragment } from "react";
import { AppBar as BaseAppBar, Grid, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import NavLinkButton from "../navBarButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const navLinks: any = {
  Services: "/services",
  "About Us": "/about",
  Gallery: "/gallery",
  Contact: "/contact",
};

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
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [checker, setChecker] = useState("666");

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    console.log("opening");
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

  const test = () => {
    console.log("test2");
    setChecker("333");
  };

  return (
    <Fragment>
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
            {/* <Button onClick={test}>{checker}</Button> */}
            {
              <Grid className="menu-icon" item>
                {/* <Button onClick={()=>toggleDrawer('left', true)}>{<MenuIcon />}</Button>
                   <SwipeableDrawer
                   anchor={'left'}
                   open={state['left']}
                   onClose={toggleDrawer('left', false)}
                   onOpen={() => toggleDrawer('left', true)}
                 >
                   {list('left')}
                 </SwipeableDrawer> */}

                {/* {["left", "right", "top", "bottom"].map((anchor: string) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={() => toggleDrawer(anchor, true)}>
                      {anchor}
                    </Button>
                    <SwipeableDrawer
                      anchor="left"
                      open={state["left"]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))} */}

                <MenuIcon onClick={() => console.log(true)} />
              </Grid>
            }
          </StyledNav>
        </Toolbar>
      </BaseAppBar>
    </Fragment>
  );
};

export default Header;
