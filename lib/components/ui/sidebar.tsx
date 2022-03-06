import { useState, createElement } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NavLinkButton from "../navBarButton";
import { NAV_LINKS } from "../../utility/constants";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CollectionsIcon from "@mui/icons-material/Collections";
const navLinks = NAV_LINKS;

const icons = {
  DesignServicesIcon: <DesignServicesIcon />,
  PersonPinIcon: <PersonPinIcon />,
  CollectionsIcon: <CollectionsIcon />,
  MailIcon: <MailIcon />,
};

const SideBar = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const renderIcon = (iconName: string) => {
    return icons[iconName as keyof typeof icons];
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        display="flex"
        justifyContent="center"
        sx={{ width: 250, margin: "20px 0" }}
      >
        <NavLinkButton to="/" newTab={false}>
          <img src="logo.png" width="200px" alt="nfl logo" />
        </NavLinkButton>
      </Box>
      <Divider />
      <List>
        {["Services", "About Us", "Gallery", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* <DesignServicesIcon />  */}
              {renderIcon(navLinks[text as keyof typeof navLinks].icon)}
            </ListItemIcon>
            <NavLinkButton
              to={navLinks[text as keyof typeof navLinks].url}
              newTab={false}
            >
              {text}
            </NavLinkButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
};

export default SideBar;
