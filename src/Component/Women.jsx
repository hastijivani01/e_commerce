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

// import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../Component/Image/Women/carousel1.jpg';
import carousellogo1 from '../Component/Image/Women/carousel-logo1.webp';
import carousellogo2 from '../Component/Image/Women/carousel-logo2.webp';
import carousellogo3 from '../Component/Image/Women/carousel-logo3.png';
import carousel2 from '../Component/Image/Women/carousel2.jpeg';
import carousellogo4 from '../Component/Image/Women/carousel-logo4.jpg';
import carousellogo5 from '../Component/Image/Women/carousel-logo5.png';
import carousellogo6 from '../Component/Image/Women/carousel-logo6.png';
import carousel3 from '../Component/Image/Women/carousel3.jpg';
import carousellogo7 from '../Component/Image/Women/carousel-logo7.jpg';
import carousellogo8 from '../Component/Image/Women/carousel-logo8.jpg';
import carousellogo9 from '../Component/Image/Women/carousel-logo9.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import card1 from '../Component/Image/Women/card1.webp';
import card2 from '../Component/Image/Women/card2.webp';
import card3 from '../Component/Image/Women/card3.webp';
import card4 from '../Component/Image/Women/card4.jpg';
import card5 from '../Component/Image/Women/card5.webp';
import card6 from '../Component/Image/Women/card6.webp';
import card7 from '../Component/Image/Women/card7.jpeg';
import card8 from '../Component/Image/Women/card8.webp';
import card9 from '../Component/Image/Women/card9.webp';
import card10 from '../Component/Image/Women/card10.webp';
import card11 from '../Component/Image/Women/card11.webp';
import card12 from '../Component/Image/Women/card12.webp';
import { Container, CardActions } from '@mui/material';
import women1 from '../Component/Image/Women/women1.webp';
import women2 from '../Component/Image/Women/women2.jpg';
import women3 from '../Component/Image/Women/women3.jpg';


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
      title: 'Black Solid Top & Jacket Trouser',
      description: 'Product 1',
      price: 'Rs. 1,225',
      originalPrice: 'Rs. 3,499.00',
      discount: '65% OFF'
    },
    {
      image: card2,
      title: 'Striped Jumpsuit with Waist Tie-Up',
      description: 'Product 2',
      price: 'Rs. 1,348',
      originalPrice: 'Rs. 2,995',
      discount: '55% OFF'
    },
    {
      image: card3,
      title: 'Embellished Women Jumpsuit',
      description: 'Product 3',
      price: 'Rs. 1,999',
      originalPrice: 'Rs. 4,799',
      discount: '58% OFF',
    },
    {
      image: card4,
      title: ' White Shirt And Black Pants ',
      description: 'Product 4',
      price: 'Rs. 1800',
      originalPrice: 'Rs. 2000',
      discount: '10% OFF',
    },
    {
      image: card5,
      title: 'Sequence Work Long Anarkali Gown',
      description: 'Product 5',
      price: 'Rs. 2,100',
      originalPrice: 'Rs.3000 ',
      discount: '30% OFF',
    },
    {
      image: card6,
      title: 'Pure Georgette Saree with Jacket ',
      description: 'Product 6',
      price: 'Rs.7799',
      originalPrice: 'Rs. 14,599',
      discount: '58% OFF',
    },
    {
      image: card7,
      title: 'Choli Set With Shrug',
      description: 'Product 7',
      price: 'Rs.4,249.00',
      originalPrice: 'Rs. 8,499 ',
      discount: '50% OFF',
    },
    {
      image: card8,
      title: 'Dusty Pink Cocktail Gown',
      description: 'Product 8',
      price: 'Rs. 65000',
      originalPrice: 'Rs. 69,890',
      discount: '15% OFF',
    },
    {
      image: card9,
      title: 'Gold Dial Gold PVD Steel',
      description: 'Product 9',
      price: 'Rs.40,800',
      originalPrice: 'Rs. 51,000',
      discount: '20% OFF',
    },
    {
      image: card10,
      title: 'Lakme Makeup Kit',
      description: 'Product 10',
      price: 'Rs. 4999',
      originalPrice: 'Rs. 5,500',
      discount: '10% OFF',
    },
    {
      image: card11,
      title: 'Embellished Party Block Heels',
      description: 'Product 11',
      price: 'Rs. 1797',
      originalPrice: 'Rs. 2899',
      discount: '38% OFF',
    },
    {
      image: card12,
      title: 'Handbag for Wedding Prom',
      description: 'Product 12',
      price: 'Rs. 4,750.41',
      originalPrice: 'Rs. 7000',
      discount: '20% OFF',
    },
  
  ];

  const newsItems = [
    {
      image: women1,
      category: 'COLLECTION',
      date: '25 Apr 2022',
      title: 'The Best Products Fashion',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
    {
      image: women2,
      category: 'FASHION',
      date: '25 Apr 2022',
      title: 'New Finds From Tuckernuck',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
    },
    {
      image: women3, 
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
        <div className="carousel-container"  data-aos="fade-down">
          <Slider {...settings}>
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
                  <h3>Women Wear</h3>
                  <p>Min. 30% Off</p>
                  <a href="" className="explore-link">+ Explore</a>
                </div>
              </div>
            </div>
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
                  <h3>Watches</h3>
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
                  <h3>Footwear</h3>
                  <p>Min. 40% Off</p>
                  <a href="" className="explore-link">+ Explore</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
             <Box>
        <Typography variant='h4'align="center"  paddingTop={7} >Trending In Indian Wear</Typography>
        <hr className='underline' />
      </Box>
            {/* Product Cards Grid */}
            <Grid container spacing={3}>
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
      
        <Container>
          <Typography variant="h4" component="h2" align="center" paddingTop={10} gutterBottom  data-aos="fade-down">
            Our Latest News
          </Typography>
          <Typography variant="subtitle1" color={'gray'} align="center" gutterBottom  data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel facilisis.
          </Typography>
          <Grid container spacing={4}>
            {newsItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in">
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














