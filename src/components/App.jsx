import 'modern-normalize';
import '../index.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import { useState } from 'react';
import Notification from './Notification/Notification';

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    setReviews(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };
  const handleReset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round(
    (reviews.good / (reviews.good + reviews.bad)) * 100
  );

  return (
    <div>
      <Description />
      <Options
        leaveFeedback={updateFeedback}
        resetFeedback={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          total={totalFeedback}
          percent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
export default App;