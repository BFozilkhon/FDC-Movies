import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { save } from '../../redux/context';
import Spinner from '../Spiner';
import { Button, Card, Container, Img, Title } from './style';

export const Kontakt = () => {
  const [active, setActive] = useState(true);
  const data = useSelector((state) => state.moviesTodo.list);
  const localData = localStorage.getItem('Array');
  const navigate = useNavigate()
  var a = JSON.parse(localData).map((item) => item.id);
  const dispatch = useDispatch();
  setTimeout(() => {
    setActive(false);
  }, 1000);

  const getClicked = (value) => {
   dispatch(save({ ids: value.id, all: value }))
     navigate('/favourite')
  } 

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
                onClick={() => getClicked(value)}
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
