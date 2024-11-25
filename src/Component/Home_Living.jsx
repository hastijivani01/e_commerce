import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import logo from '../Component/Image/ShopWhiz__3_-removebg-preview.png';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../Component/Image/Home_living/carousel1.jpg';
import carousellogo1 from '../Component/Image/Home_living/carousel-logo1.jpg';
import carousellogo2 from '../Component/Image/Home_living/carousel-logo2.png';
import carousellogo3 from '../Component/Image/Home_living/carousel-logo3.jpg';
import carousel2 from '../Component/Image/Home_living/carousel2.webp';

import carousel3 from '../Component/Image/Home_living/carousel3.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import card1 from '../Component/Image/Home_living/card1.webp';
import card2 from '../Component/Image/Home_living/card2.webp';
import card3 from '../Component/Image/Home_living/card3.webp';
import card4 from '../Component/Image/Home_living/card4.webp';
import card5 from '../Component/Image/Home_living/card5.webp';
import card6 from '../Component/Image/Home_living/card6.jpg';
import card7 from '../Component/Image/Home_living/card7.webp';
import card8 from '../Component/Image/Home_living/card8.jpg';
import card9 from '../Component/Image/Home_living/card9.avif';
import card10 from '../Component/Image/Home_living/card10.webp';
import card11 from '../Component/Image/Home_living/card11.webp';
import card12 from '../Component/Image/Home_living/card12.jpg';
import { Container, CardActions } from '@mui/material';
import home1 from '../Component/Image/Home_living/home1.avif';
import home2 from '../Component/Image/Home_living/home2.jpg';
import kids3 from '../Component/Image/Kids/kids3.webp';

const drawerWidth = 240;
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

  const cards = [
    {
      image: card1,
      title: 'Luxury 7 Piece Comforter Set In Black',
      description: 'Product 1',
      price: 'Rs. 14,355',
      originalPrice: 'Rs. 15000',
      discount: '10% OFF'
    },
    {
      image: card2,
      title: 'Diwan solid wood Teak ',
      description: 'Product 2',
      price: 'Rs. 30,399',
      originalPrice: 'Rs. 75,899',
      discount: '59% OFF'
    },
    {
      image: card3,
      title: 'Swoosh Floor Lamp',
      description: 'Product 3',
      price: 'Rs. 33,399',
      originalPrice: 'Rs. 35000',
      discount: '26% OFF',
    },
    {
      image: card4,
      title: 'LED Swan Hanging Ceiling Lamps',
      description: 'Product 4',
      price: 'Rs. 35099',
      originalPrice: 'Rs. 70199',
      discount: '50% OFF',
    },
    {
      image: card5,
      title: 'Soul & Scents Diffuser Set, Aroma',
      description: 'Product 5',
      price: 'Rs. 1,146',
      originalPrice: 'Rs.1,398 ',
      discount: '18% OFF',
    },
    {
      image: card6,
      title: 'Wall Silent Clock Art LEAYAN',
      description: 'Product 6',
      price: 'Rs.12000',
      originalPrice: 'Rs. 15000',
      discount: '24% OFF',
    },
    {
      image: card7,
      title: 'Wooden Wall Shelf Designer ',
      description: 'Product 7',
      price: 'Rs.8,499',
      originalPrice: 'Rs.  17,999',
      discount: '53% OFF',
    },
    {
      image: card8,
      title: 'Di Grazia Electric Water Fountain',
      description: 'Product 8',
      price: 'Rs. 3,499',
      originalPrice: 'Rs. 4,999',
      discount: '27% OFF',
    },
    {
      image: card9,
      title: 'Set of 2 Curtain',
      description: 'Product 9',
      price: 'Rs.40,800',
      originalPrice: 'Rs. 51,000',
      discount: '20% OFF',
    },
    {
      image: card10,
      title: 'Housewarming Hamper',
      description: 'Product 10',
      price: 'Rs. 3501',
      originalPrice: 'Rs. 3,890',
      discount: '10% OFF',
    },
    {
      image: card11,
      title: 'Mugs Minimalist Ceramic Cups ',
      description: 'Product 11',
      price: 'Rs. 15,660',
      originalPrice: 'Rs. 26,729',
      discount: '41% OFF',
    },
    {
      image: card12,
      title: 'SmileSellers Led mirror 3D Modern',
      description: 'Product 12',
      price: 'Rs. 3,540',
      originalPrice: 'Rs. 5,999',
      discount: '41% OFF',
    },

   
  ];

  const newsItems = [
    {
      image: home1,
      category: 'COLLECTION',
      date: '25 Apr 2022',
      title: 'The Best Products Fashion',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
    {
      image: home2, 
      category: 'FASHION',
      date: '25 Apr 2022',
      title: 'New Finds From Tuckernuck',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
    {
      image: kids3, 
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}data-aos="fade-up"
            >
              <img src={logo} alt="logo" style={{ width: '120px', height: 'auto' }} />
            </Typography>


            <Box sx={{ display: { xs: 'none', sm: 'block' } }} data-aos="fade-up">
              {navItems.map(item => (
                <Button key={item.label} sx={{ color: '#000' }} onClick={() => history.push(item.path)}>
                  {item.label}
                </Button>

              ))}
            </Box>


          </Toolbar>
   
        <div className="carousel-container" data-aos="fade-down">
          <Slider {...settings}>
            <div className="carousel-slide">
              <img src={carousel3} alt="Slide 1" className="carousel-image" />
              <div className="carousel-caption">
                <div className="brand-logos" style={{ display: 'flex' }}>
                  <img src={carousellogo1} alt="Puma" />
                  <img src={carousellogo2} alt="Adidas" />
                  <img src={carousellogo3} alt="Adidas" />
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
                  <img src={carousellogo1} alt="titans" />
                  <img src={carousellogo2} alt="Rolex" />
                  <img src={carousellogo3} alt="Timex" />
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
        <Typography variant='h4' align="center"  paddingTop={7} >Trending In Indian Wear</Typography>
        <hr className='underline' />
      </Box>
        
            <Grid container spacing={3} >
              {cards.map((card, index) => (   
                <Grid item xs={12} sm={6} md={3} key={index} data-aos="flip-left">
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

                    <Box sx={{ mb: 2 }}>
                      <Button fullWidth style={{ marginTop: '10px' }} className='card-button'>ShopNow</Button>

                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          {/* </Main>
        </Box> */}
        <Container>
          <Typography variant="h4" component="h2" align="center" paddingTop={10} gutterBottom data-aos="fade-down">
            Our Latest News
          </Typography>
          <Typography variant="subtitle1" color={'gray'} align="center" gutterBottom data-aos="fade-up">
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



