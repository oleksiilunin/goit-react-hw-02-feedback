import PropTypes, { arrayOf } from 'prop-types';

import { ButtonList, ButtonContainer, Button } from './feedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ButtonContainer key={option}>
            <Button key={option} data-rating={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ButtonContainer>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
