import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../Component/Image/ShopWhiz__3_-removebg-preview.png';
import Body from '../Component/Body';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { Home } from '@material-ui/icons';
import Women from './Women';
import Kids from './Kids';
import Home_Living from './Home_Living';
import Men from './Men';



const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Men', path: '/men' },
  { label: 'Women', path: '/women' },
  { label: 'Kids', path: '/kids' },
  { label: 'Home & Living', path: '/homeliving' }
];

function Navbar(props) {
  const history = useHistory()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
         <ListItem key={item.label} disablePadding onClick={() => history.push(item.path)}>
         <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
           <ListItemText primary={item.label} />
         </ListItemButton>
       </ListItem>
       
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex', position: 'relative' }} >
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center' }}  data-aos="fade-up">
              <img src={logo} style={{ width: '100px' }} alt="Logo" />
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{ display: 'flex', backgroundColor: '#f0f0f0', borderRadius: '5px' }} data-aos="fade-up">
                <InputBase
                  sx={{ flex: 1 }}
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                  style={{ width: '400px' }}
                />
               
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} data-aos="fade-up">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#000',
                    margin: 1,
                    padding: 1,
                    '&:hover': {
                      backgroundColor: 'lightgray',
                      color: 'black',
                    },
                    '&:active': {
                      backgroundColor: 'gray',
                      color: 'white',
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
              keepMounted: true, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" style={{paddingTop: '20px'}}>
          <Toolbar />
          <Body style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        </Box>

      </Box>
    </>
  );
}



export default Navbar;