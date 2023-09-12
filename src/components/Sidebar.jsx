import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

import { CalendarMonthOutlined, LiveTv } from "@mui/icons-material";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

export default function Sidebar() {
  return (
    <div className="sidebar">
      <StyledDrawer variant="permanent" anchor="left">
        <div className="moviebox-card">
          <div className="moviebox">
            <LiveTv />
          </div>
          <div>
            <p>MovieBox</p>
          </div>
        </div>
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VideocamOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <OndemandVideoIcon />
            </ListItemIcon>
            <ListItemText primary="TV Series" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CalendarMonthOutlined />
            </ListItemIcon>
            <ListItemText primary="Upcoming" />
          </ListItem>
        </List>
      </StyledDrawer>
    </div>
  );
}
