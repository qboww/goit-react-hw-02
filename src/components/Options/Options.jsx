import css from "./Options.module.css";

const Options = ({ totalFeedback, updateFeedback, handleReset }) => {
  return (
    <div className={css.buttonsWrapper}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
