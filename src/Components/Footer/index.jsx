import React from 'react';
import {
  Box,
  Container,
  Title,
  Item,
  Wrapper,
  Header,
  Flexing,
  Instagram,
  Facebook,
  Youtube,
} from './style';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Box large>
          <Header>FDCMOVE</Header>
          <Item>Find the movie of your dreams!!!</Item>
          <Flexing>
            <a target={'blank'} href='https://www.facebook.com/'>
              <Facebook />
            </a>
            <a target={'blank'} href='https://www.instagram.com/?hl=ru'>
              <Instagram />
            </a>
            <a target={'blank'} href='https://www.youtube.com/'>
              <Youtube />
            </a>
          </Flexing>
        </Box>
        <Box>
          <Title>Headers</Title>
          <Item>Movies</Item>
          <Item>Video</Item>
          <Item>Audio</Item>
          <Item>Api</Item>
          <Item>Weather</Item>
          <Item>Api</Item>
          <Item>Send Email</Item>
        </Box>
        <Box>
          <Title>Headers</Title>
          <Item>Movies</Item>
          <Item>Video</Item>
          <Item>Audio</Item>
          <Item>Api</Item>
          <Item>Weather</Item>
          <Item>Api</Item>
          <Item>Send Email</Item>
        </Box>
        <Box>
          <Title>Headers</Title>
          <Item>Movies</Item>
          <Item>Video</Item>
          <Item>Audio</Item>
          <Item>Api</Item>
          <Item>Weather</Item>
          <Item>Api</Item>
          <Item>Send Email</Item>
        </Box>
        <Box>
          <Title>Headers</Title>
          <Item>Movies</Item>
          <Item>Video</Item>
          <Item>Audio</Item>
          <Item>Api</Item>
          <Item>Weather</Item>
          <Item>Api</Item>
          <Item>Send Email</Item>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
