import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(13, 14, 14);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 75%;
  margin: 0px auto;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 8px 8px 0px 0px;
`;

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 8px 3px;
`;

export const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(2, 214, 23);
  color: white;
  font-size: 20px;
  margin: auto auto 20px auto;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 2px 3px 10px rgb(0, 255, 25), -2px -3px 10px rgb(0, 255, 25);
  }
  :active {
    box-shadow: none;
  }
`;

export const ButtonRed = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  font-size: 20px;
  margin: auto auto 20px auto;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 2px 3px 10px rgb(252, 73, 73), -2px -3px 10px rgb(252, 73, 73);
  }
  :active {
    box-shadow: none;
  }
`;
