const Feedback = ({ reviews, total, percent }) => {
  return (
    <div>
      <p>Good:{reviews.good}</p>
      <p>Neutral:{reviews.neutral}</p>
      <p>Bad:{reviews.bad}</p>
      <p>Total:{total}</p>
      <p>Positive:{percent}%</p>
    </div>
  );
};
export default Feedback;
