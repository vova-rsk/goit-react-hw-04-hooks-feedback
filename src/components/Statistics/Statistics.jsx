import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = props => {
  const statsItems = Object.keys(props);
  return (
    <List>
      {statsItems.map((item, idx, arr) => {
        const title = item[0].toUpperCase() + item.slice(1);
        const value = [props[item], idx !== arr.length - 1 ? '' : '%'].join('');

        return (
          <li key={idx}>
            <span>{title}:</span>
            <span>{value}</span>
          </li>
        );
      })}
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};
