import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  
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


  //   console.log(data);
  //   for(let info in data){
  //     console.log(info.message)
  //   }

  //  console.log("dm" + data.message)
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and hello again.
        </p>
        <p>{data.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Hello
        </a>
      </header>
    </div>
  );
}

export default App;
