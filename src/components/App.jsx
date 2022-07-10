import { Component } from 'react';
import Statistics from './Statistics';
import Feedback from './Feedback';
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

  FeedbackHandle = event => {
    const stateName = event.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
  };
  btns = () => Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={this.btns()} leaveFeedback={this.FeedbackHandle} />
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
