import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Section from 'Component/Section/';
import Statistics from 'Component/Statistics/';
import FeedbackOptions from './Component/FeedbackOptions/';
import Notification from 'Component/Notification/';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const key = e.currentTarget.textContent.toLowerCase();

    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="feedback">
        <h1>Please leave a feedback</h1>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        <h2>Statistics</h2>
        {countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
