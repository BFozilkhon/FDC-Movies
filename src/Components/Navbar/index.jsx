import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Item, NavLinks, Title, Wrapper } from './style';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title onClick={() => navigate('/home')}>FDCMOVE</Title>
        <NavLinks>
          <Item onClick={() => navigate('/movies')}>Movies</Item>
          <Item onClick={() => navigate('/favourite')}>Favourite</Item>
          <Item onClick={() => navigate('/music')}>Music</Item>
          <Item onClick={() => navigate('/api')}>Api</Item>
        </NavLinks>
        <Button onClick={() => navigate('/')}>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
