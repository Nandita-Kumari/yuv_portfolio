import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useLocation } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Professional", path: "/professional" },
  { label: "Skills", path: "/skills" },
  { label: "Projects & More", path: "/projects" },
  { label: "Hire me", path: "/hire-me" },
];

function DrawerAppBar(props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState("");

  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  /* 🔹 Read avatar (or user type image) */
  React.useEffect(() => {
    const avatar = sessionStorage.getItem("userAvatar");
    if (avatar) {
      setUserAvatar(avatar);
    }
  }, [location.pathname]);

  /* 🔹 SAFE SCROLL LISTENER */
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.window.scrollY > 10);
    };

    globalThis.window.addEventListener("scroll", handleScroll);
    return () => globalThis.window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleDrawerToggle = () => {
  //   setMobileOpen((prev) => !prev);
  // };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#db0000" }}>
        Youvakshi Thakur
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              end={item.path === "/home"}
              sx={{
                textAlign: "center",
                "&.active": {
                  backgroundColor: "#db000015",
                  color: "#db0000",
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          bgcolor: isHomePage
            ? isScrolled
              ? "#000"
              : "transparent"
            : "#000",
          transition: "0.3s",
          boxShadow: isHomePage ? (isScrolled ? 1: "none") : 1,
        }}
      >
        <Toolbar>
          {/* Mobile menu */}
          <IconButton
            color="inherit"
            aria-label = "open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <svg width="260" height="80" viewBox="0 0 260 80"> <defs> <path id="curve" d="M10,60 Q130,40 250,60" /> </defs> <text fill="#db0000" fontSize="20" fontWeight="600" letterSpacing="2px" > <textPath href="#curve" startOffset="50%" textAnchor="middle"> YOUVAKSHI THAKUR </textPath> </text> </svg>
          </Box>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                end={item.path === "/home"}
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  "&.active": {
                    color: "#db0000",
                    borderBottom: "2px solid #db0000",
                  },
                  "&:hover": { color: "#db0000", },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* 🔹 USER AVATAR / TYPE IMAGE */}
          {userAvatar && (
            <Box
              component="img"
              src={userAvatar}
              alt="User avatar"
              sx={{
                width: 36,
                height: 36,
                // borderRadius: "50%",
                // border: "2px solid #db0000",
                objectFit: "cover",
                ml: 2,
              }}
            />
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
     <nav> 
      <Drawer container={container}
       variant="temporary" 
       open={mobileOpen} 
       onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true,

      }} 
      sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }} > {drawer} 
      </Drawer> 
      </nav> 
      
      <Box component="main" sx={{ p: 0 }}>
       </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
