import styled, { css } from 'styled-components';
import opener from '../../assets/imgs/opener.jpg';
import mortal from '../../assets/imgs/mortal.png';
import { Carousel } from 'antd';

const openers = css`
  background-size: 100% 100%;
  margin: 0px auto;
  height: 70vh;

  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 75%;
  margin: 0px auto;
  margin-top: 60px;
`;

export const Carousels = styled(Carousel)`
  > .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    margin: 0px;
    padding: 0px;
  }
  > .slick-dots li.slick-active button {
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background: white;
    margin: 0px;
    padding: 0px;
  }
`;

export const Marvels = styled.div`
  background-image: url(${opener});
  ${openers}
`;

export const Mortal = styled.div`
  background-image: url(${mortal});
  ${openers}
`;

export const Tanirovka = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    83.46deg,
    rgba(62, 223, 247, 0.4) -3.47%,
    rgba(0, 175, 245, 0.4) 99.19%
  );
`;

export const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 5px;
  letter-spacing: 2px;
  margin-top: 100px;
`;

export const Item = styled.div`
  font-size: 25px;
  color: white;
  text-align: center;
  margin-top: 30px;
`;
