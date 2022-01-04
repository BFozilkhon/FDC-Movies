import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SendEmail from '../SendEmail';
import {
  Btn,
  Container,
  Div,
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
        <Input onChange={(e) => setName(e.target.value)} type={'text'} />
        <Item>Password</Item>
        <Input onChange={(e) => setPass(e.target.value)} type={'password'} />
        {name == 'Fozil' && pass == '2007' ? (
          <Btn onClick={() => navigate('/home')}>Login</Btn>
        ) : (
          <Btn>Login</Btn>
        )}
      </Container>
    </Wrapper>
  );
};

export default Login;
