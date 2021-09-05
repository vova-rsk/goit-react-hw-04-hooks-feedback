import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /*method for adding current feedback*/
  incrementStats = e => {
    const statName = e.target.dataset.name;
    this.setState(prevState => ({ [statName]: prevState[statName] + 1 }));
  };

  /*method for calculating the total quantity of feedbacks */
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
  };

  /*method for calculating the percentage of positive feedbacks */
  countPositiveFeedbackPercentage = () => {
    if (!this.state.good) {
      return 0;
    }

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  /*method for generating markup */
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementStats}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default App;
