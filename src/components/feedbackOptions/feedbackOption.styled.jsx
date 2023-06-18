import styled from '@emotion/styled';

const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ButtonContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  width: 72px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cececf;
	
	box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  background-color: #d2d8db;
	color: #666666;

	font-size: 16px;
	font-weight: 600;

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

export { ButtonList, ButtonContainer, Button };
