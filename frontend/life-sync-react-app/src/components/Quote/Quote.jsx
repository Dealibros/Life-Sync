import './styles.css';
import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../apiFetch';

export default function Quote() {
  const API_KEY = `${process.env.REACT_APP_QUOTE_API_KEY}`;

  const [quote, setQuote] = useState([]);
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`;

  useEffect(() => {
    apiFetch(apiUrl, 'GET', null, API_KEY).then((data) => {
      setQuote(data);
    });
  }, []);

  return (
    <div className="quote-component">
      {quote.length > 0 && (
        <>
          <blockquote className="quote">{quote[0].quote}</blockquote>
          <br></br>
          <cite className="quote-author">-{quote[0].author}</cite>
        </>
      )}
    </div>
  );
}
