import logo from '../media/life_sync_logo.png';
import '../styles/App.css';
import React, { useEffect, useState } from "react";

function NewPage() {
  
    const [data, setData] = useState([]);
    
  
    // const fetchData = () => {
    //   return fetch( "calendar?id=1")
    //       .then((response) => response.json())
    //       .then((data) => setData(data));
  
    // }

    useEffect(() => {
      

    fetch('http://localhost:8080/calendar?id=1', )
      .then(response => response.json())
      .then(data => {
        setData(data);
        

      })
  }, []);

console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="welcome-message">
            This is the second Page!
          </p> 
        <p>{data.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's get started!
        </a>
      </header>
    </div>
  );
}

export default NewPage;
