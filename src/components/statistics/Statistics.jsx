import PropTypes from 'prop-types';

import Notification from 'components/notification';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback = 0,
  positivePercentage = 0,
}) => {
  return totalFeedback ? (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  ) : (
    <div>
      <Notification message="There is no feedback" />
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

console.log('test');
