import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { Container } from './App.styled';

const FEEDBACK_OPTIONS = ['good', 'neutral', 'bad', 'smthElse'];
const TARGET_OPTION = 'good';

/*
 *  The functioning of the component is based on the specified feedback-options array and
 *  the target element from the specified array, for which statistics will be calculated
 */
const App = () => {
  const [stats, setStats] = useState(() =>
    FEEDBACK_OPTIONS.reduce((acc, stat) => ({ ...acc, [stat]: 0 }), {}),
  );

  const options = Object.keys(stats);
  const totalFeedbacks = Object.values(stats).reduce(
    (acc, elem) => acc + elem,
    0,
  );
  const positivePercentage = !stats[TARGET_OPTION]
    ? 0
    : Math.round((stats[TARGET_OPTION] / totalFeedbacks) * 100);

  /*function for adding current feedback*/
  const incrementStats = e => {
    const statName = e.target.dataset.name;
    setStats({ ...stats, [statName]: stats[statName] + 1 });
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={incrementStats} />
      </Section>
      {totalFeedbacks ? (
        <Section title="Statistics">
          <Statistics
            {...stats}
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
