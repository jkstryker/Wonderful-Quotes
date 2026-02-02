import { useState } from "react";
import Card from "./components/Card";
import QuoteForm from "./components/QuoteForm";
import QuoteList from "./components/QuoteList";

function App() {
  const [quotes, setQuotes] = useState([]);

  function addQuoteHandler(quoteText) {
    const newQuote = {
      id: Math.random().toString(),
      text: quoteText,
      createdAt: new Date().toLocaleString(),
    };

    console.log("Adding quote:", newQuote);

    setQuotes((prev) => {
      const updated = [newQuote, ...prev];
      console.log("Updated quotes:", updated);
      return updated;
    });
  }

  function deleteQuoteHandler(id) {
    console.log("Deleting quote id:", id);

    setQuotes((prev) => {
      const updated = prev.filter((q) => q.id !== id);
      console.log("Updated quotes after delete:", updated);
      return updated;
    });
  }

  function clearAllHandler() {
    console.log("Clearing all quotes");
    setQuotes([]);
  }

  return (
    <div className="app">
      <h1 className="title">Quotes</h1>

      <Card>
        <QuoteForm onAddQuote={addQuoteHandler} />
      </Card>

      <Card>
        <div className="list-header">
          <h2 className="subtitle">Your Quotes</h2>

          
          <button
            className="btn-secondary"
            type="button"
            onClick={clearAllHandler}
            disabled={quotes.length === 0}
            title={quotes.length === 0 ? "No quotes to clear" : "Clear all quotes"}
          >
            Clear All
          </button>
        </div>

        <QuoteList items={quotes} onDeleteQuote={deleteQuoteHandler} />
      </Card>
    </div>
  );
}

export default App;
