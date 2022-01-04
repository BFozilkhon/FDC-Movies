import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  border-bottom: 2px solid white;
  position: sticky;
  z-index: 999;
  top: 0;
  background: rgb(13, 14, 14);
`;

export const Wrapper = styled.div`
  width: 75%;
  height: 90px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-size: 18px;
  color: white;
  opacity: 0.7;
  margin: 0px 30px;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const Button = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background: none;
  border: 2px solid #0db8de;

  border-radius: 30px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    font-size: 22px;
    background: rgb(0, 255, 238);
    border: 2px solid rgb(0, 255, 238);
    box-shadow: 3px 4px 10px #0db8de, -3px -4px 10px #0db8de;
  }
  :active {
    box-shadow: none;
  }
`;
