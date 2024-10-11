import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuote } from "../components/features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { content, author, status, error } = useSelector(
    (state) => state.quote
  );

  // Запросить случайную цитату при первом рендере
  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  // Обработчик для загрузки новой цитаты
  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.container}>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <>
          <p className={styles.quote}>"{content}"</p>
          <p className={styles.author}>- {author}</p>
        </>
      )}
      {status === "failed" && <p>{error}</p>}
      <button className={styles.button} onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
