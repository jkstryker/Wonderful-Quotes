import { useState } from "react";

const MAX_CHARS = 180;

function QuoteForm(props) {
  const [quoteText, setQuoteText] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  function quoteChangeHandler(e) {
    setQuoteText(e.target.value);
    if (isInvalid) setIsInvalid(false);
    console.log("Textarea:", e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const trimmedQuoteText = quoteText.trim();

    if (trimmedQuoteText === "") {
      console.log("Blocked submit: blank quote");
      setIsInvalid(true);
      return;
    }

    props.onAddQuote(trimmedQuoteText);
    setQuoteText("");
    setIsInvalid(false);
  }

  const controlClasses = isInvalid ? "control invalid" : "control";
  const isAtCharLimit = quoteText.length >= MAX_CHARS;
  const counterClasses = isAtCharLimit ? "counter warn" : "counter";

  return (
    <form className="quote-form" onSubmit={submitHandler}>
      <h2 className="subtitle">Add a Quote</h2>

      {isInvalid && (
        <p className="error-text">Please enter a quote before submitting.</p>
      )}

      <div className={controlClasses}>
        <label>Your Quote</label>
        <textarea
          rows="4"
          value={quoteText}
          onChange={quoteChangeHandler}
          maxLength={MAX_CHARS}
          placeholder="Type something memorable..."
        />
        <div className="meta-row">
          <span className="hint">Click a quote below to delete it.</span>
          <span className={counterClasses}>
            {quoteText.length}/{MAX_CHARS}
          </span>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit">Submit Quote</button>
      </div>
    </form>
  );
}

export default QuoteForm;