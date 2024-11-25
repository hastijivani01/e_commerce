import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Grid, Card } from '@mui/material';
import carousel1 from '../Component/Image/carousel1-transformed.jpeg';
import carousel2 from '../Component/Image/carousel2.png';
import carousel3 from '../Component/Image/carousel3-transformed.jpeg';
import LabTabs from '../Component/Card';

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <Box>
      <Box className='carousel' data-aos="zoom-in">
        <Slider {...settings}>
          <Box>
            <Box className='carousel-img' style={{ backgroundImage: `url(${carousel1})` }}>
              <Box className='carousel-text'>
                <Typography variant='h4'>Discover Your Style with ShopWhiz</Typography><br />
                <Typography variant='body1'>Exclusive Summer Sale - Up to 50% Off!</Typography><br /><br />
                <button className='carousel-button'>Shop Now</button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className='carousel-img' style={{ backgroundImage: `url(${carousel2})` }}>
              <Box className='carousel-text'>
                <Typography variant='h4'>Explore Our New Collection</Typography><br />
                <Typography variant='body1'>Fresh Arrivals for the Season</Typography><br /><br />
                <button className='carousel-button'>Discover More</button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className='carousel-img' style={{ backgroundImage: `url(${carousel3})` }}>
              <Box className='carousel-text'>
                <Typography variant='h4'>Quality You Can Trust</Typography><br />
                <Typography variant='body1'>Shop the Best Brands at Unbeatable Prices</Typography><br /><br />
                <button className='carousel-button'>Start Shopping</button>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>

      <Box>
        <Typography variant='h3' className='over-product'>Our Product</Typography>
        <hr className='underline' />
      </Box>

     
      <LabTabs />
    </Box>
  );
};

export default Body;



