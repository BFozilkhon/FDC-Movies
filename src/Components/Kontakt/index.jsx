import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { save } from '../../redux/context';
import Spinner from '../Spiner';
import { Button, Card, Container, Img, Title } from './style';

export const Kontakt = () => {
  const [active, setActive] = useState(true);
  const data = useSelector((state) => state.moviesTodo.list);
  const localData = localStorage.getItem('Array');

  var a = JSON.parse(localData).map((item) => item.id);
  const dispatch = useDispatch();
  setTimeout(() => {
    setActive(false);
  }, 1000);

  return (
    <Container>
      {active ? (
        <Spinner />
      ) : (
        data.map((value) => {
          return (
            <Card key={value.id}>
              <Img src={value.url} />
              <Title>{value.name}</Title>
              <Button
                style={{
                  background: a?.some((ar) => ar === value?.id)
                    ? 'yellow'
                    : 'green',
                }}
                onClick={() => dispatch(save({ ids: value.id, all: value }))}
              >
                Favourite
              </Button>
            </Card>
          );
        })
      )}
    </Container>
  );
};

export default Kontakt;
