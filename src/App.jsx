import { useReducer } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { Container } from './App.styled';

const FEEDBACK_OPTIONS = ['good', 'neutral', 'bad'];
const TARGET_OPTION = 'good';

/*function for useReducer*/
const feedbackReducer = (state, action) => {
  return { ...state, [action.type]: state[action.type] + action.playload };
};

/*
 *  The functioning of the component is based on the specified feedback-options array and
 *  the target element from the specified array, for which statistics will be calculated
 */
const App = () => {
  const [state, dispatch] = useReducer(feedbackReducer, {}, () =>
    FEEDBACK_OPTIONS.reduce((acc, option) => ({ ...acc, [option]: 0 }), {}),
  );

  const options = Object.keys(state);
  const totalFeedbacks = Object.values(state).reduce(
    (acc, elem) => acc + elem,
    0,
  );
  const positivePercentage = !state[TARGET_OPTION]
    ? 0
    : Math.round((state[TARGET_OPTION] / totalFeedbacks) * 100);

  /*function for adding current feedback*/
  const incrementStats = e => {
    const option = e.target.dataset.name;
    dispatch({ type: option, playload: 1 });
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={incrementStats} />
      </Section>
      {totalFeedbacks ? (
        <Section title="Statistics">
          <Statistics
            {...state}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
};

export default App;
