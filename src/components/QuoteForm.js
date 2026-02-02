import { useState } from "react";

const MAX_CHARS = 180;

function QuoteForm(props) {
  const [quote, setQuote] = useState("");
  const [hasError, setHasError] = useState(false);

  function quoteChangeHandler(e) {
    setQuote(e.target.value);
    if (hasError) setHasError(false);
    console.log("Textarea:", e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const cleaned = quote.trim();

    if (cleaned === "") {
      console.log("Blocked submit: blank quote");
      setHasError(true);
      return;
    }

    props.onAddQuote(cleaned);
    setQuote("");
    setHasError(false);
  }

  const controlClasses = hasError ? "control invalid" : "control";

  return (
    <form className="quote-form" onSubmit={submitHandler}>
      <h2 className="subtitle">Add a Quote</h2>

      {hasError && (
        <p className="error-text">Please enter a quote before submitting.</p>
      )}

      <div className={controlClasses}>
        <label>Your Quote</label>
        <textarea
          rows="4"
          value={quote}
          onChange={quoteChangeHandler}
          maxLength={MAX_CHARS}
          placeholder="Type something memorable..."
        />
        <div className="meta-row">
          <span className="hint">Click a quote below to delete it.</span>
          <span className={quote.length >= MAX_CHARS ? "counter warn" : "counter"}>
            {quote.length}/{MAX_CHARS}
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
