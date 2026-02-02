function QuoteItem(props) {
  function clickHandler() {
    console.log("Quote clicked => delete:", props.id);
    props.onDelete(props.id);
  }

  return (
    <li className="quote-item" onClick={clickHandler} role="button" tabIndex="0">
      <p className="quote-text">“{props.text}”</p>
      <p className="quote-date">{props.createdAt}</p>
      <p className="quote-hint">Click to delete</p>
    </li>
  );
}

export default QuoteItem;
