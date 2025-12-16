import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Hero from './Hero';
import { NavLink, useLocation } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Professional", path: "/professional" },
  { label: "Skills", path: "/skills" },
  { label: "Projects & More", path: "/projects" },
  { label: "Hire me", path: "/hire-me" },
];



function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
const isHomePage = location.pathname === "/";

React.useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(globalThis.window.scrollY > 10);
  };

  globalThis.window.addEventListener("scroll", handleScroll);
  return () => globalThis.window.removeEventListener("scroll", handleScroll);
}, []);


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#db0000' }}>
        Youvakshi Thakur
      </Typography>
      <Divider />
      <List>
  {navItems.map((item) => (
    <ListItem key={item.label} disablePadding>
      <ListItemButton
        component={NavLink}
        to={item.path}
        end={item.path === "/"}
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
  component="nav"
  position="fixed"
  sx={{
    backgroundColor: isHomePage
      ? isScrolled
        ? "#000000"
        : "transparent"
      : "#000000",
    transition: "background-color 0.3s ease",
    boxShadow: isHomePage
      ? (isScrolled ? 1 : "none")
      : 1,
  }}
>


  <Toolbar>

    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>

   <Box
  sx={{
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
  }}
>
  <svg width="260" height="80" viewBox="0 0 260 80">
    <defs>
      <path
        id="curve"
        d="M10,60 Q130,40 250,60"
      />
    </defs>

    <text
      fill="#db0000"
      fontSize="20"
      fontWeight="600"
      letterSpacing="2px"
    >
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        YOUVAKSHI THAKUR
      </textPath>
    </text>
  </svg>
</Box>


 <Box
  sx={{
    display: { xs: "none", sm: "flex" },
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    flexBasis: "100%",
  }}
>
  {navItems.map((item) => (
    <Button
      key={item.label}
      component={NavLink}
      to={item.path}
      end={item.path === "/"} // exact match for Home
      sx={{
        color: "#ffffff",
        fontWeight: 500,
        "&.active": {
          color: "#db0000",
          borderBottom: "2px solid #db0000",
        },
        "&:hover": {
          color: "#db0000",
        },
      }}
    >
      {item.label}
    </Button>
  ))}
</Box>




  </Toolbar>
</AppBar>


      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    <Box component="main" sx={{ p: 0 }}>

 {/* <Hero/> */}


</Box>



    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
