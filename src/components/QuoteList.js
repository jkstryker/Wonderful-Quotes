import QuoteItem from "./QuoteItem";

function QuoteList({ items, onDeleteQuote }) {
  if (!items || items.length === 0) {
    return <p className="empty">No quotes yet. Add your first one above.</p>;
  }

  return (
    <ul className="quote-list">
      {items.map((q) => (
        <QuoteItem
          key={q.id}
          id={q.id}
          text={q.text}
          createdAt={q.createdAt}
          onDelete={onDeleteQuote}
        />
      ))}
    </ul>
  );
}

export default QuoteList;