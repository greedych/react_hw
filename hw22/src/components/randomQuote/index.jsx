import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../../redux/slices/quoteSlice";

function RandomQuote() {
  const { quote, isSuccess, isLoading } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  if (isSuccess)
    return (
      <div>
        <p>{quote.quote}</p>
        <h2>-{quote.author}</h2>
        <button onClick={() => dispatch(fetchQuote())}>Ckick</button>
      </div>
    );
}

export default RandomQuote;
