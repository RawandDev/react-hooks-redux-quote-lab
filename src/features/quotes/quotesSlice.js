// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export const removeQuote = (quote) => {
  return {
    type: "quotes/remove",
    payload: quote,
  };
};

export const upvoteQuote = (quote) => {
  return {
    type: "quotes/upvote",
    payload: quote,
  };
};

export const downvoteQuote = (quote) => {
  return {
    type: "quotes/downvote",
    payload: quote,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    case "quotes/upvote":
      return state.map((quote) => {
        if (quote.id === action.payload) {
          return { ...quote, votes: quote.votes + 1 };
        }
        return quote;
      });
    case "quotes/downvote":
      return state.map((quote) => {
        if (quote.id === action.payload) {
          if (quote.votes === 0) return quote;
          return { ...quote, votes: quote.votes - 1 };
        }
        return quote;
      });
    default:
      return state;
  }
}
