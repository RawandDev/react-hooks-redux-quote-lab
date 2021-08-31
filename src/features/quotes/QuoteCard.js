import React from "react";
import { useDispatch } from "react-redux";
import { downvoteQuote, upvoteQuote, removeQuote } from "./quotesSlice";

function QuoteCard(props) {
  const dispatch = useDispatch();

  const handleUpvote = () => {
    dispatch(upvoteQuote(props.quote.id));
  };

  const handleDownvote = () => {
    dispatch(downvoteQuote(props.quote.id));
  };

  const handleRemove = () => {
    dispatch(removeQuote(props.quote.id));
  };

  console.log(props);
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpvote}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDownvote}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleRemove}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
