import React from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import logo from "./images/logo-1.png";
import image1 from './images/image-1.jpg';
import image2 from './images/image-1.jpg';
import image3 from './images/image-1.jpg';
import image4 from './images/image-1.jpg';
import image5 from './images/image-1.jpg';
import image6 from './images/image-1.jpg';
import image7 from './images/image-1.jpg';
import image8 from './images/image-1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FullPageContainer = styled(Container)({
  width: '100%',
  height : '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#000',
  fontFamily: 'Roboto, sans-serif',
});

const Header = styled(Box)({
  width: '100%',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  marginBottom: '15px',
});

const Logo = styled('img')({
  height: '50px',
  borderRadius: '40px',
});

const MainContent = styled(Box)({
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '50px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
  flex: 1,
});

const BoxContainer = styled(Box)({
  display: 'flex',
  marginTop: '30px',
  marginBottom: '50px',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '90%',
  height: 'auto',
  alignItems: 'center',
});

const StyledBox = styled(Box)({
  padding: '10px',
  backgroundColor: '#808080', // Box color set to grey
  borderRadius: '10%', // Make the boxes round
  width: '23%',
  height: '270px',
  textAlign: 'center',
  margin: '0.5px',
  display: 'flex', // Make StyledBox a flex container
  flexDirection: 'column',
  justifyContent: 'space-between', // Space out children elements
  alignItems: 'center',
  transition: 'transform 0.3s ease', // Smooth hover effect
  '&:hover': {
    transform: 'scale(1.1)', // Scale up on hover
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const ContentDiv = styled(Box)({
  padding: '20px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '35px',
  backgroundColor: '#808080',
  width: '70%',
  textAlign: 'center',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '20px'
});

const ImpressionButton = styled(Button)({
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: '20px',
  alignSelf: 'flex-center', // Align button to the bottom of the ContentDiv
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const ButtonItem = styled(Button)({
  margin: '10px',
});

const CarouselImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
});

const PageOne = () => (
  <FullPageContainer>
  <Header>
      <Logo src={logo} alt="Logo" />
      <Typography variant="h6" style={{ color: '#4CAF50' }}>Grow Yourself</Typography>
    </Header>
    <h1 style={{ color: '#4CAF50' }}>Each task got its unique solution</h1>
    <BoxContainer>
      <StyledBox>
        <Typography variant="h5">Box 1</Typography>
        <Typography variant="body1">Content for Box 1</Typography>
        <StyledButton variant="contained">Click Me</StyledButton>
      </StyledBox>
      <StyledBox>
        <Typography variant="h5">Box 2</Typography>
        <Typography variant="body1">Content for Box 2</Typography>
        <StyledButton variant="contained">Click Me</StyledButton>
      </StyledBox>
      <StyledBox>
        <Typography variant="h5">Box 3</Typography>
        <Typography variant="body1">Content for Box 3</Typography>
        <StyledButton variant="contained">Click Me</StyledButton>
      </StyledBox>
    </BoxContainer>
    <ContentDiv>
      <Typography variant="h5">Want to make a bigger impression?</Typography>
      <ImpressionButton variant="contained">Learn More</ImpressionButton>
    </ContentDiv>
  </FullPageContainer>
);

const PageTwo = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <FullPageContainer>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Typography variant="h6" style={{ color: '#4CAF50' }}>Grow Yourself</Typography>
      </Header>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        {/* First div (50% width) */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000', // Background color for the first div
            color: '#4CAF50',
            fontSize: '1.5rem', // Reduced font size
            padding: '20px',
          }}
        >
          <Typography variant="h2" component="h2">
            Choose Your Target, we’ll see to the rest. All you have to do is sit back and relax.
          </Typography>
        </Box>

        {/* Second div (50% width) with carousel */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000', // Background color for the second div
          }}
        >
          <div style={{ width: '80%' }}> {/* Adjusted width for better alignment */}
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <CarouselImage src={image} alt={`Example ${index + 1}`} />
                  <Carousel.Caption>
                    <ButtonItem variant="contained">Button {index + 1}</ButtonItem>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Box>
      </Box>
    </FullPageContainer>
  );
};

const App = () => (
  <>
    
    <PageOne />
    <PageTwo />
  </>
);

export default App;
