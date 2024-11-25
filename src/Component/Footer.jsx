import { Box, Typography, TextField, Button, List, ListItem, Link } from '@mui/material';
import React, { useEffect } from 'react';

import logo from '../Component/Image/ShopWhiz__3_-removebg-preview.png';
import AOS from 'aos';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

function Footer() {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: true,
    });
}, []);

  return (
    <Box sx={{ backgroundColor: 'black', color: '#6a6a6a', pt: '50px', pb: '20px', px: { xs: '20px', sm: '50px', md: '70px' } }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>


        <Box sx={{ maxWidth: '300px', mb: '20px' }}>
     
          <Typography sx={{ color: '#6a6a6a', mt: 2, fontSize: '13px', textAlign: 'left' }} data-aos="fade-up" data-aos-delay="200">
          Our collection celebrates the artistry of India's most skilled craftsmen, bringing to you a curated range of handmade clothing that combines the rich heritage of traditional techniques with contemporary design sensibilities. Discover garments that exude luxury, precision, and timeless charm—crafted for the modern connoisseur of fashion.</Typography>

          <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
              data-aos="fade-up" data-aos-delay="300"
              variant="outlined"
              placeholder="Enter your email address"
              sx={{
                backgroundColor: '#333',
                input: { color: '#6a6a6a' },
                mr: 1,
                width: '200px',
                border: '1px solid white',
              }}  
            />
            <Button
              variant="contained"
              data-aos="fade-up" data-aos-delay="300"
              sx={{
                backgroundColor: '#333',
                color: '#6a6a6a',
                border: '1px solid white',
                '&:hover': {
                  backgroundColor: '#555',
                  borderColor: 'white',
                },
              }}
            >
              JOIN
            </Button>
          </Box>
        </Box>

       
        <Box>
          <Typography sx={{ fontSize: '13px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up" data-aos-delay="400">
            MAIN MENU
          </Typography>
          <List sx={{ p: 0 }}>
            {['New Arrivals', 'Women', 'Men', 'Kids', 'Gifting', 'Trending'].map((item, index) => (
              <ListItem key={item} sx={{ p: 0, mb: 1 }} data-aos="fade-up" data-aos-delay={500 + index * 100}>
                <Link href="#" underline="hover" sx={{ color: '#6a6a6a', fontSize: '13px', '&:hover': { color: 'white' } }}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>


        <Box sx={{ fontSize: '13px', color: '#6a6a6a' }}>
          <Typography sx={{ fontWeight: 'bold', mb: 1 }} data-aos="fade-up" data-aos-delay="600">
            REACH US
          </Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up" data-aos-delay="700">Contact Us</Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up" data-aos-delay="800">support@example.com</Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up" data-aos-delay="900">+91 9876543210</Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up" data-aos-delay="1000">(10 am to 6 pm | Mon - Fri)</Typography>

          <Box sx={{ display: 'flex', mt: 1 }}>
            <Box sx={{ p: 1, borderRadius: '100%', mr: 1, cursor: 'pointer', '&:hover': { backgroundColor: '#555' } }} data-aos="fade-up" data-aos-delay="1100">
              <FacebookRoundedIcon />
            </Box>
            <Box sx={{ p: 1, borderRadius: '100%', cursor: 'pointer', '&:hover': { backgroundColor: '#555' } }} data-aos="fade-up" data-aos-delay="1200">
              <InstagramIcon />
            </Box>
          </Box>
        </Box>

  
        <Box>
          <Typography sx={{ fontSize: '13px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up" data-aos-delay="1300">
          SHOPWHIZ
          </Typography>
          <List sx={{ p: 0 }} data-aos="fade-up" data-aos-delay="1400">
            {['SHOPWHIZ Diaries', 'Testimonials', 'Store Locator', 'Gifts', 'Order Tracking'].map((item, index) => (
              <ListItem key={item} sx={{ p: 0, mb: 1 }} data-aos="fade-up" data-aos-delay={1400 + index * 100}>
                <Link href="#" underline="hover" sx={{ color: '#6a6a6a', fontSize: '13px', '&:hover': { color: 'white' } }}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

    
        <Box>
          <Typography sx={{ fontSize: '13px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up" data-aos-delay="1500">
            POLICIES
          </Typography>
          <List sx={{ p: 0 }}>
            {['Terms & Conditions', 'Returns & Exchange', 'Shipping Policy', 'Privacy Policy'].map((item, index) => (
              <ListItem key={item} sx={{ p: 0, mb: 1 }} data-aos="fade-up" data-aos-delay={1600 + index * 100}>
                <Link href="#" underline="hover" sx={{ color: '#6a6a6a', fontSize: '13px', '&:hover': { color: 'white' } }}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Typography sx={{ textAlign: 'center', mt: 4, color: '#6a6a6a', fontSize: '12px' }}>
        © SHOPWHIZ
      </Typography>
    </Box>
  );
}




export default Footer;
