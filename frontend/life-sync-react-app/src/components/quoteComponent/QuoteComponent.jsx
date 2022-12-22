import './styles.css';
import React, { useState, useEffect } from "react";

export default function QuoteComponent() {

  const [quote, setQuote] = useState([]); 
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
  
  
  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      mode:'cors',
      headers: {
        'X-Api-Key': 'HOqsexoTVGil9yp+CHel+Q==pxWJPhs55PYK4WQ1'
      },
      contentType: 'application/json',
      })
    
    .then(response => response.json())
    .then(data => {
    console.log(data)
    setQuote(data)
   
  })
  }, []);

      return (
        <div className="quote-component">
          {quote.length > 0 && 
             <><h3 className='quote'>{quote[0].quote}</h3>
             <h4 className='quote-author'>{quote[0].author}</h4></>
}
        </div>
      );
    };
  
