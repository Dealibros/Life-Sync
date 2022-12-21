import './styles.css';
import React, { useState } from "react";

export default function QuoteComponent() {

  const quote_api_url = 'https://type.fit/api/quotes';
  
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  const config = {
    apiUrl: 'https://type.fit/api/quotes',
    repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
  }

  // async function getQuoteApi(){
  //   const response = await fetch(quote_api_url)
  //   let data = await response.json();
  //   setQuote(data)
  // }

  const getQuotes = () => {
    setQuotes([])
    setIsLoading(true)
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        setQuotes(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

    console.log(quotes);

      return (
        <div className="quote-component">
          {/* <h2> Hello</h2> */}
        </div>
      );
    };
  
