import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/intro.png";
import nameImage from "../assets/youvakshiLogo.png";

/* --------- AVATARS --------- */
import entrepreneurImg from "../assets/entrepreneur.png";
import studentImg from "../assets/student.png";
import professionalImg from "../assets/professional.png";
import freelancerImg from "../assets/freelancer.png";

/* --------- CONFIG --------- */
const drawerWidth = 240;

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Professional", path: "/professional" },
  { label: "Skills", path: "/skills" },
  { label: "Projects & More", path: "/projects" },
  { label: "Hire me", path: "/hire-me" },
];

const avatarOptions = [
  { label: "Entrepreneur", avatar: entrepreneurImg },
  { label: "Student", avatar: studentImg },
  { label: "Professional", avatar: professionalImg },
  { label: "Freelancer", avatar: freelancerImg },
];

function DrawerAppBar(props) {
  const { window } = props;

  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [userAvatar, setUserAvatar] = React.useState("");

  /* Dropdown */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  /* --------- EFFECTS --------- */

  React.useEffect(() => {
    const avatar = sessionStorage.getItem("userAvatar");
    if (avatar) setUserAvatar(avatar);
  }, [location.pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.window.scrollY > 10);
    };
    globalThis.window.addEventListener("scroll", handleScroll);
    return () =>
      globalThis.window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------- HANDLERS --------- */

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAvatarChange = (item) => {
    sessionStorage.setItem("userAvatar", item.avatar);
    sessionStorage.setItem("userType", item.label);
    setUserAvatar(item.avatar);
    handleCloseMenu();
  };

  const navigate = useNavigate();

const handleExit = () => {
  sessionStorage.clear();
  handleCloseMenu();
  navigate("/", { replace: true });
};


  /* --------- DRAWER --------- */

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
  component="img"
  src={nameImage}
  alt="Youvakshi Thakur"
  sx={{
    height: 28,
    objectFit: "contain",
    display: { xs: "none", sm: "block" },
  }}
/>

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /* --------- RENDER --------- */

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
          boxShadow: isHomePage ? (isScrolled ? 1 : "none") : 1,
        }}
      >
        <Toolbar>
          {/* MOBILE MENU */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* LEFT : AVATAR + NAME */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {userAvatar && (
              <Avatar
                src={userAvatar}
                onClick={handleAvatarClick}
                sx={{
                  width: 36,
                  height: 36,
                  cursor: "pointer",
                  // border: "2px solid #db0000",
                }}
              />
            )}
            <Box
  component="img"
  src={nameImage}
  alt="Youvakshi Thakur"
  sx={{
    height: 78,
    objectFit: "contain",
    display: { xs: "none", sm: "block" },
  }}
/>

          </Box>

          {/* CENTER : NAV LINKS */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              flexGrow: 1,
              justifyContent: "center",
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
                  fontSize: "0.7rem",
                  "&.active": {
                    color: "#db0000",
                    borderBottom: "2px solid #db0000",
                  },
                  "&:hover": { color: "#db0000" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* RIGHT : SMALL LOGO */}
          <Box>
            <img
              src= {logo}              
              alt="logo"
              style={{ height: 40 }}
            />
          </Box>
        </Toolbar>

        {/* AVATAR DROPDOWN */}
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleCloseMenu}>
          {avatarOptions.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => handleAvatarChange(item)}
              sx={{ gap: 1 }}
            >
              <Avatar src={item.avatar} sx={{ width: 24, height: 24 }} />
              {item.label}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleExit} sx={{ color: "red" }}>
            Exit
          </MenuItem>
        </Menu>
      </AppBar>

      {/* MOBILE DRAWER */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
