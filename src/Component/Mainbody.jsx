import React from 'react';
import { Box, Typography, Button, Rating, Grid } from '@mui/material';
import mainbody1 from '../Component/Image/mainbody1.webp';
import mainbody2 from '../Component/Image/mainbody2.webp';
import about from '../Component/Image/about.webp';



const ProductPage = () => {
  return (
    <>
      <Box p={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={mainbody1}
              alt="Product"
              style={{ width: '80%', height: '500px' }}
              data-aos="fade-up"
            />
            <img
              src={mainbody2}
              alt="Product"
              style={{
                width: '40%',
                height: '300px',
                marginTop: '-208px',
                marginLeft: '290px',
                border: '10px solid white',
              }}
              data-aos="fade-up"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" display="block" gutterBottom data-aos="fade-up">
              NEW COLLECTIONS
            </Typography>
            <Typography variant="h3" gutterBottom data-aos="fade-up">
              Best Sweatshirts and tracksuits for everyone!
            </Typography>
            <Typography variant="body1" data-aos="fade-up">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </Typography>
            <Button variant="contained" color="primary" size="large" data-aos="fade-up">
              Shop Now
            </Button>
            <Box mt={4} data-aos="fade-up">
              <Rating value={4.5} readOnly />
              <Typography variant="body2" display="inline" ml={1} data-aos="fade-up">
                (10.000+) Rating
              </Typography>
              <Typography variant="body2" data-aos="fade-up">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                ultrices gravida.
              </Typography>
              <Typography variant="body2" fontWeight="bold" data-aos="fade-up">
                Petra van der Meer
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

    
      <Box p={6} bgcolor="#f9f9f9">
        <Grid container spacing={4} alignItems="center">
        
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom data-aos="fade-up">
              About Us
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph data-aos="fade-up">
              At <strong>SHOPWHIZ</strong>, we believe fashion is a reflection of individuality. Our mission
              is to craft high-quality, stylish, and comfortable clothing that empowers people to express
              themselves.
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph data-aos="fade-up">
              From timeless classics to modern trends, our collections are designed to cater to every style
              and occasion. Sustainability and quality are at the heart of our production process, ensuring
              every piece is crafted with care for you and the planet.
            </Typography>
            <Button variant="contained" color="primary" size="large" data-aos="fade-up">
              Learn More
            </Button>
          </Grid>

     
          <Grid item xs={12} md={6} data-aos="fade-up">
            <img src={about}  alt="About Us" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductPage;
