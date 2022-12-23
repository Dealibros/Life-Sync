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
    setQuote(data)
   
  })
  }, []);

      return (
        <div className="quote-component">
          {quote.length > 0 && 
             <><blockquote className='quote'>{quote[0].quote}</blockquote><br></br>
             <cite className='quote-author'>-{quote[0].author}</cite></>
}
        </div>
      );
    };
  
