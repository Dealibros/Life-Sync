function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return fetch( "http://localhost:8080/calendar/?id=1")
        .then((response) => response.json())
        .then((data) => setData(data));

  }

  useEffect(() => {
    fetchData();
  },[])
  
  console.log(data);



  import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  
    const [data, setData] = useState([]);
  
    // const fetchData = () => {
    //   return fetch( "http://localhost:8080/calendar?id=1")
    //       .then((response) => response.json())
    //       .then((data) => setData(data));
  
    // }

    async function fetchData(){
      let response = await fetch("http://localhost:8080/calendar?id=1", {
        method:"GET",
    });
    if(response.ok){
      console.log("hheeeeey")
      // setData(response.json())
      // console.log(response.json)
      return await response.json();
    }
  
  
    // useEffect(() => {
    //   fetchData();
    // },[])


   
    console.log("hello from the console")
    console.log(data);
    fetchData()
  
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and hello again.
        </p>
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

  
    async function fetchData(){
      let response = await fetch("http://localhost:8080/calendar?id=1", {
        method:"GET",
    });
    if(response.ok){
      return await response.json();
    }



      //   // const fetchData = () => {
  //   //   return fetch( "calendar?id=1")
  //   //       .then((response) => response.json())
  //   //       .then((data) => setData(data));
  
  //   // }

  //   useEffect(() => {
      

  //   fetch('http://localhost:8080/calendar?id=1', )
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
        

  //     })
  // }, []);