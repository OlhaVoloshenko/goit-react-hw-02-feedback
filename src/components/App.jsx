import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Feedback';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  TotalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };
  percentagePositiveFeedback = () =>
    Math.round((this.state.good / this.TotalFeedback()) * 100);

  FeedbackIncrement = event => {
    const currState = event.currentTarget.name;
    this.setState(curr => ({
      [currState]: curr[currState] + 1,
    }));
  };
  btns = () => Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.btns()}
            onLeaveFeedback={this.FeedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.TotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.TotalFeedback}
              positivePercentage={this.percentagePositiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
