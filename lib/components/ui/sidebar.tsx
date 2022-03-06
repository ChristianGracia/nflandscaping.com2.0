import { useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NavLinkButton from "../navBarButton";
import Constants from "../../utility/constants";
import ListItemButton from '@mui/material/ListItemButton';

const navLinks = Constants.NAV_LINKS;

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
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor: string) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box display="flex" justifyContent="center" sx={{ width: 250 }}>
        <NavLinkButton to="/" newTab={false}>
          <img src="logo.png" width="120px" alt="nfl logo" />
        </NavLinkButton>
      </Box>
      <Divider />
      <List>
        {["Services", "About Us", "Gallery", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <NavLinkButton to={navLinks[text.toString()]} newTab={false}>
          {text}
        </NavLinkButton>
          </ListItem>
        ))}
      </List>
      </Box>
      );
    

  return (
    <>
      <Button onClick={toggleDrawer('left', true)}> <MenuIcon /></Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
    </>
  );
};

export default SideBar;
