import styled, { css } from 'styled-components';
import { ReactComponent as instagram } from '../../assets/icons/intagram.svg';
import { ReactComponent as youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';

const icon = css`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  path {
    transition: all 0.3s;
    fill: white;
  }

  :hover {
    path {
      fill: rgb(0, 255, 238);
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  border-top: 2px solid white;
  padding: 40px 10px;
`;

export const Container = styled.div`
  width: 70%;
  margin: 0px auto;
  display: flex;
`;

export const Box = styled.div`
  flex: ${({ large }) => (large ? '3' : '2')};
`;

export const Header = styled.div`
  font-size: 37px;
  color: white;
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: 24px;
  color: white;
  margin-bottom: 13px;
`;

export const Item = styled.div`
  font-size: 16px;
  color: white;
  line-height: 30px;
  cursor: pointer;
  :hover {
    color: rgb(0, 255, 238);
  }
`;

export const Flexing = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Instagram = styled(instagram)`
  ${icon}
`;

export const Facebook = styled(facebook)`
  ${icon}
`;

export const Youtube = styled(youtube)`
  ${icon}
`;
