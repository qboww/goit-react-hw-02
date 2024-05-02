import css from "./Options.module.css";

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.buttonsWrapper}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Options;