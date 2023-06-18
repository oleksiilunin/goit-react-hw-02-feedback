import PropTypes from 'prop-types';

import {
  StatisticList,
  StatisticWrapper,
  StatisticValue,
} from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback = 0,
  positivePercentage = 0,
}) => {
  return (
    <StatisticList>
      <StatisticWrapper>
        Good: <StatisticValue>{good}</StatisticValue>
      </StatisticWrapper>
      <StatisticWrapper>
        Neutral: <StatisticValue>{neutral}</StatisticValue>
      </StatisticWrapper>
      <StatisticWrapper>
        Bad: <StatisticValue>{bad}</StatisticValue>
      </StatisticWrapper>
      <StatisticWrapper>
        Total: <StatisticValue>{totalFeedback}</StatisticValue>
      </StatisticWrapper>
      <StatisticWrapper>
        Positive feedback:{' '}
        <StatisticValue>{positivePercentage}%</StatisticValue>
      </StatisticWrapper>
    </StatisticList>
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
