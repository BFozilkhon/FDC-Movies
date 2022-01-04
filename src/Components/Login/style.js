import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 520px;
  height: 80vh;
  margin: 0px auto;
  background: #1a2226;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px 20px 150px 15px;
  justify-content: space-evenly;
`;

export const Icon = styled.i`
  font-size: 80px;
  margin: 0px auto;
  color: rgb(0, 255, 238);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin: 0px auto;
`;

export const Item = styled.div`
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 2.5px;
  font-size: 13px;
  width: 80%;
  margin: 0px auto;
`;

export const Input = styled.input`
  outline: none;
  width: 80%;
  margin: 0px auto;
  font-size: 17px;
  color: white;
  padding-bottom: 8px;
  border: none;
  border-bottom: 2px solid #0db8de;
  background: none;
  margin-bottom: 35px;
`;

export const Btn = styled.div`
  width: 180px;
  height: 45px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  border: 2px solid #0db8de;
  margin-left: auto;
  margin-right: 60px;
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
