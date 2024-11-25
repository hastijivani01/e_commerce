import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography'; 
import cardimg1 from '../Component/Image/cardimg1.webp'; 
import cardimg2 from '../Component/Image/cardimg2.jpg';  
import cardimg3 from '../Component/Image/cardimg3.webp';  
import cardimg4 from '../Component/Image/cardimg4.webp';   
import cardimg5 from '../Component/Image/cardimg5.webp'; 
import cardimg6 from '../Component/Image/cardimg6.webp';         
import cardimg7 from '../Component/Image/cardimg7.jpeg';     
import cardimg8 from '../Component/Image/cardimg8.webp';      
import { Link } from 'react-router-dom';
import Mainbody from './Mainbody'

const ProductBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
  },
}));

const ProductImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: 'transparent',
  width: '120px',
  height: '120px',
  marginBottom: theme.spacing(1),
  border: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '80px',
    height: '80px',
  },
}));

const RectangularProductImage = styled('img')(({ theme }) => ({
  backgroundColor: 'transparent',
  width: '260px',
  height: '400px',
  objectFit: 'cover',
  marginBottom: theme.spacing(1),
  border: 'none',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    height: '250px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '120px',
    height: '180px',
  },
}));

function Navbar2(props) {
  const theme = useTheme();

  React.useEffect(() => {
    AOS.init({ duration: 1000, 
      once: true,
    });
  }, []);


  const freshInStoreItems = [
    { name: 'Women Black Shirt', image: cardimg1 },
    { name: 'Man Black Shirt', image: cardimg3 },
    { name: 'Women Black T-Shirt',image: cardimg2},
    { name: 'Man Black T-Shirt ',image: cardimg4 },
  ];

  const freshInStoreItem = [
    { name: ' Women Watch',image: cardimg5  },
    { name: 'Man Watch',image: cardimg6 },
    { name: 'Woman Shoes', image: cardimg7},
    { name: 'Man Shoes', image: cardimg8 },
  ];

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          margin: '0 auto',
          padding: theme.spacing(2),
        }}
      >

      </Box>

      <Box sx={{ width: '100%'}}>
        <TabContext value={value}>
          <Box sx={{
            borderBottom: 1,
            borderColor: 'transparent',
            justifyContent: 'center',
            backgroundPosition: 'center',
            fontFamily: 'MADE Canvas Regular',
      }}>
            <Box sx={{
              borderBottom: 1 ,
              borderColor: 'transparent',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
        
            }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'black',
          
        },
      }} >
                <Tab sx={{fontFamily: 'MADE Canvas Regular' , fontSize: '20px' , color: 'black' , fontStyle: 'italic' , '&.Mui-selected': {
              color: 'black', 
              backgroundColor: 'transparent', 
            },}} label="Fresh in Store" value="1" />
                <Tab sx={{ fontFamily: 'MADE Canvas Regular', fontSize: '20px', color: 'black' , fontStyle: 'italic',  '&.Mui-selected': {
              color: 'black',
              backgroundColor: 'transparent', 
            }, }} label="The Bestsellers" value="2" />
              </TabList>
            </Box>
          </Box>
          
          <TabPanel value="1">
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                margin: '0 auto',
                gap: '-10px',
                textDecoration: 'underline'
              }}
            >
              {freshInStoreItems.map((item) => (
                <ProductBox key={item.name} sx={{ textAlign: 'center' , margin: 0}}>
                  <RectangularProductImage
                    data-aos="fade-up" data-aos-delay="100"
                    src={item.image}
                    alt={item.name}
                  />
                  <Typography variant="body2" color="textSecondary" my={3}>
                    {item.name}
                  </Typography> 
                </ProductBox>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="2">
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                margin: '0 auto',
                textDecoration: 'underline'
              }}
            >
              {freshInStoreItem.map((item) => (
                <ProductBox key={item.name} sx={{ textAlign: 'center' , margin: 0 }}>
                  <RectangularProductImage
                    data-aos="fade-up"
                    src={item.image}
                    alt={item.name}
                  />
                  <Typography variant="body2" color="textSecondary" my={3} >
                 
                    {item.name}
                  </Typography> 
                </ProductBox>
              ))}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>

      <Mainbody />
    </>
  );
}

Navbar2.propTypes = {
  window: PropTypes.func,
};

export default Navbar2;




























