import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../Component/Image/ShopWhiz__3_-removebg-preview.png';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../Component/Image/Men/carousel1.webp';
import carousellogo1 from '../Component/Image/Men/carousel-logo1.png';
import carousellogo2 from '../Component/Image/Men/carousel-logo2.webp';
import carousellogo3 from '../Component/Image/Men/carousel-logo3.png';
import carousel2 from '../Component/Image/Men/carousel2.webp';
import carousellogo4 from '../Component/Image/Men/carousel-logo4.webp';
import carousellogo5 from '../Component/Image/Men/carousel-logo5.svg';
import carousellogo6 from '../Component/Image/Men/carousel-logo6.png';
import carousel3 from '../Component/Image/Men/carousel3.webp';
import carousellogo7 from '../Component/Image/Men/carousel-logo7.jpg';
import carousellogo8 from '../Component/Image/Men/carousel-logo8.jpg';
import carousellogo9 from '../Component/Image/Men/carousel-logo9.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import card1 from '../Component/Image/Men/card1.webp';
import card2 from '../Component/Image/Men/card2.webp';
import card3 from '../Component/Image/Men/card3.webp';
import card4 from '../Component/Image/Men/card4.webp';
import card5 from '../Component/Image/Men/card5.webp';
import card6 from '../Component/Image/Men/card6.webp';
import card7 from '../Component/Image/Men/card7.webp';
import card8 from '../Component/Image/Men/card8.webp';
import card9 from '../Component/Image/Men/card9.webp';
import card10 from '../Component/Image/Men/card10.webp';
import card11 from '../Component/Image/Men/card11.webp';
import card12 from '../Component/Image/Men/card12.webp';
import { Container, CardActions } from '@mui/material';
import men1 from '../Component/Image/Men/men1.webp';
import men2 from '../Component/Image/Men/men2.webp';
import men3 from '../Component/Image/Men/men3.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Men', path: '/men' },
  { label: 'Women', path: '/women' },
  { label: 'Kids', path: '/kids' },
  { label: 'Home & Living', path: '/homeliving' }
];

function Navbar(props) {
  const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };



  const [isFavorited, setIsFavorited] = useState(false);


  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  

  const cards = [
    {
      image: card1,
      title: 'Oversize Drop Shoulder Shirt',
      description: 'Product 1',
      price: 'Rs. 999.00',
      originalPrice: 'Rs. 2000',
      discount: '50% OFF'
    },
    {
      image: card2,
      title: 'Round Neck Relaxed Fit T-shirt',
      description: 'Product 2',
      price: 'Rs. 800',
      originalPrice: 'Rs. 1000',
      discount: '20% OFF'
    },
    {
          image: card3, 
          title: 'Thread Work Chanderi Silk Kurta', 
          description: 'Product 3', 
          price: 'Rs. 7200',
          originalPrice: 'Rs. 9000',
          discount: '20% OFF',
        },
        {
          image: card4, 
          title: ' Mens Formal Two Piece Suits',
           description: 'Product 4', 
           price: 'Rs. 11250',
          originalPrice: 'Rs. 15000',
          discount: '25% OFF',
        },
        {
          image: card5, 
          title: 'Analog Watch for Men', 
          description: 'Product 5', 
          price: 'Rs. 5,895.00',
          originalPrice: 'Rs. 6,550',
          discount: '15% OFF',
        },
        {
          image: card6, 
          title: 'Product Christian Dior Perfume', 
          description: 'Product 6', 
          price: 'Rs.8,999',
          originalPrice: 'Rs. 11,300',
          discount: '20% OFF',
        },
        {
          image: card7, 
          title: 'Armaf Club De Nuit', 
          description: 'Product 7', 
          price: 'Rs. 4,037',
          originalPrice: 'Rs. 4,750 ',
          discount: '15% OFF',
        },
        {
          image: card8, 
          title: 'Crystal Grey', 
          description: 'Product 8', 
          price: 'Rs. 1499.00',
          originalPrice: 'Rs. 2499',
          discount: '40% OFF',
        },
        {
          image: card9, 
          title: 'Mens Future Walking Shoes', 
          description: 'Product 9', 
          price: 'Rs.2,249',
          originalPrice: 'Rs. 2,499',
          discount: '10% OFF',
        },
        {
          image: card10, 
          title: 'Panelled Snapback Cap', 
          description: 'Product 10', 
          price: 'Rs. 9000',
          originalPrice: 'Rs. 10,000',
          discount: '10% OFF',
        },
        {
          image: card11, 
          title: 'Men Beige Printed Sliders', 
          description: 'Product 11', 
          price: 'Rs. 799',
          originalPrice: 'Rs. 1499',
          discount: '45% OFF',
        },
        {
          image: card12, 
          title: 'Accentum True Wirless White', 
          description: 'Product 12', 
          price: 'Rs. 10000',
          originalPrice: 'Rs. 12990',
          discount: '20% OFF',
        },
    
  ];

  React.useEffect(() => {
    AOS.init({ duration: 1000, 
      once: true,
    });
  }, []);

  const newsItems = [
    {
      image: men1,
      category: 'COLLECTION',
      date: '25 Apr 2022',
      title: 'The Best Products Fashion',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
    {
      image: men2,
      category: 'FASHION',
      date: '25 Apr 2022',
      title: 'New Finds From Tuckernuck',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
       {
          image: men3,
          category: 'CLOTHING',
          date: '25 Apr 2022',
          title: 'Sunset Sets From Saks',
          description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
        },

  ];



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
    <>
      <Box >
        <CssBaseline />
    
          <Toolbar>
            
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}  data-aos="fade-up"
            >
              
              <img src={logo} alt="logo" style={{ width: '120px', height: 'auto' }} />
            </Typography>

     







            <Box sx={{ display: { xs: 'none', sm: 'block' } }}  data-aos="fade-up">
              {navItems.map(item => (
                <Button key={item.label} sx={{ color: '#000' }} onClick={() => history.push(item.path)}>
                  {item.label}
                </Button>
                
              ))}
            </Box>
            
            
          </Toolbar>

      <div className="carousel-container"  data-aos="fade-down">
        <Slider {...settings}>
          <div className="carousel-slide">
            <img src={carousel3} alt="Slide 1" className="carousel-image" />
            <div className="carousel-caption">
              <div className="brand-logos" style={{ display: 'flex' }}>
                <img src={carousellogo7} alt="Puma" />
                <img src={carousellogo8} alt="Adidas" />
                <img src={carousellogo9} alt="Adidas" />
                <span>& More</span>
              </div>
              <div className="sale-info">
                <h3>Sports Shoes</h3>
                <p>Min. 30% Off</p>
                <a href="" className="explore-link">+ Explore</a>
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carousel1} alt="Slide 1" className="carousel-image" />
            <div className="carousel-caption">
              <div className="brand-logos" style={{ display: 'flex' }}>
                <img src={carousellogo1} alt="Puma" />
                <img src={carousellogo2} alt="Adidas" />
                <img src={carousellogo3} alt="" />
                <span>& More</span>
              </div>
              <div className="sale-info">
                <h3>Sports Shoes</h3>
                <p>Min. 30% Off</p>
                <a href="" className="explore-link">+ Explore</a>
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carousel2} alt="Slide 1" className="carousel-image" />
            <div className="carousel-caption">
              <div className="brand-logos" style={{ display: 'flex' }}>
                <img src={carousellogo4} alt="titans" />
                <img src={carousellogo5} alt="Rolex" />
                <img src={carousellogo6} alt="Timex" />
                <span>& More</span>
              </div>
              <div className="sale-info">
                <h3>Watches</h3>
                <p>Min. 40% Off</p>
                <a href="" className="explore-link">+ Explore</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
          <Box>
        <Typography variant='h4' align="center" paddingTop={7}>Trending In Indian Wear</Typography>
        <hr className='underline' />
      </Box>
          {/* Product Cards Grid */}
          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}   data-aos="flip-left">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="290"
                    image={card.image}
                    alt={card.title}
                    sx={{ objectFit: 'cover' }}
                  />

                  <CardContent>
                  
                    <Typography gutterBottom variant="h6" className='card-title' style={{ display: 'flex' }} component="div">
                      {card.title}
          


                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                    {card.price} <span style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '10px' }}>{card.originalPrice}</span> <span style={{ color: 'red' }}>{card.discount}</span>
                  </CardContent>

                  <Box sx={{  mb: 2 }}>
                  <Button fullWidth style={{ marginTop: '10px' }} className='card-button'>ShopNow</Button>

                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
    
      <Container>
      <Typography variant="h4" component="h2" align="center" paddingTop={10} gutterBottom  data-aos="fade-down" >
        Our Latest News
      </Typography>
      <Typography variant="subtitle1" color={'gray'} align="center" gutterBottom  data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel facilisis.
      </Typography>
      <Grid container spacing={4}  data-aos="zoom-in">
        {newsItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.category} — {item.date}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
        
      </Box>
      
    </>
    
  );
  
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;






