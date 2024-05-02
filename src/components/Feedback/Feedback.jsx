const Feedback = ({ feedback, totalFeedback, positiveFeedback, handleReset }) => {
  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Feedback;
