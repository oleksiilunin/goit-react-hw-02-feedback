import styled from '@emotion/styled';

const ButtonList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 64px;
  border-radius: 8px;
  border: 1px solid #cececf;

  background-color: #d2d8db;

  :hover,
  :focus {
    cursor: pointer;
    background-color: ${props => {
      if (props['data-rating'] === 'good') {
        return '#00ff00';
      } else if (props['data-rating'] === 'neutral') {
        return '#ffff00';
      } else if (props['data-rating'] === 'bad') {
        return '#ff0000';
      } else {
        return '#d2d8db';
      }
    }}
`;

export { ButtonList };
export { Button };
