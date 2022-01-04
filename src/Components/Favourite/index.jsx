import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deletes } from '../../redux/context';
import {
  ButtonRed,
  Card,
  Container,
  Img,
  Title,
  Wrapper,
} from '../Kontakt/style';

import Spinner from '../Spiner';

export const Favourite = () => {
  const { mock } = useSelector((state) => state.context);
  const dispath = useDispatch();
  const [spiner, setSpiner] = useState(true);

  setTimeout(() => {
    setSpiner(false);
  }, 1000);

  useEffect(() => {
    localStorage.setItem('Array', JSON.stringify(mock));
  }, [mock]);
  return (
    <Container>
      {spiner ? (
        <Spinner />
      ) : (
        <Container>
          {mock.length == 0 ? (
            <h1 style={{ color: 'white' }}>There isn't movie here</h1>
          ) : (
            mock.map((value) => {
              return (
                <Card key={value.id}>
                  <Img src={value.url} />
                  <Title>{value.name}</Title>
                  <ButtonRed onClick={() => dispath(deletes({ id: value.id }))}>
                    delete
                  </ButtonRed>
                </Card>
              );
            })
          )}
        </Container>
      )}
    </Container>
  );
};

export default Favourite;
