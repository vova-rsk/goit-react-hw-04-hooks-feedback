import React from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </li>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
