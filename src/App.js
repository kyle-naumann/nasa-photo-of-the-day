import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './Components/Nasa'
import Nasaimg from './Components/Nasaimg'

function App() {
  const [ data, setData ] = useState('')
  const effectFn = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=dJzDggM75pbT24RjF0Qf3fYqvjezw1ishFbfpa6p&date=2020-01-01')
    .then((res) => {
      console.log(res.data);
      setData(res.data)

    });
  };

  useEffect(effectFn, []);
  return (
    <div className="App">
      <Nasaimg data = {data}/>
    </div>
  );
}

export default App;
