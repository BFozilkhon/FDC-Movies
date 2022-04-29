import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Btn,
  Container,
  Icon,
  Input,
  Item,
  Title,
  Wrapper,
} from './style';
export const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Icon className='fa fa-key' />
        <Title>FDCMOVE</Title>
        <Item>Username</Item>
        <Input placeholder='UserName: Fozil' onChange={(e) => setName(e.target.value)} type={'text'} />
        <Item>Password</Item>
        <Input placeholder='Password: 0297' onChange={(e) => setPass(e.target.value)} type={'password'} />
        {name === 'Fozil' && pass === '0297' ? (
          <Btn onClick={() => navigate('/home')}>Login</Btn>
        ) : (
          <Btn>Login</Btn>
        )}
      </Container>
    </Wrapper>
  );
};

export default Login;
