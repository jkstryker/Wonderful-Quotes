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
////////// The QuoteList component is responsible for rendering a list of quotes. It receives an array of quote items and a delete handler as props. If there are no quotes, it displays a message prompting the user to add their first quote. Otherwise, it maps over the items and renders a QuoteItem component for each quote, passing down the necessary props including the delete handler.
export default QuoteList;