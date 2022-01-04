import styled from 'styled-components';

export const Form = styled.form`
  width: 40%;
  height: 80vh;
  padding: 10px 10px;
  margin: 100px auto;
  background: #1a2226;
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 33px;
  font-weight: 600;
  color: white;
  margin: 0px auto;
  margin-bottom: 30px;
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

export const Select = styled.select`
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

export const Option = styled.option`
  color: black;
`;

export const TextArea = styled.textarea`
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

export const Btn = styled.input`
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
