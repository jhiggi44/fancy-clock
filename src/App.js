import React, { useEffect, useState } from 'react';
import './App.css';
import Digit from './components/Digit.js';
import Colon from './components/Colon.js';

import digitMap from './digitMap';
const map = new digitMap();

function getTime() {
  let date = new Date();
  let meridian = "am";
  let hours = date.getHours();
  if (hours > 12) {
    meridian = "pm";
    hours -= 12;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = date.getMinutes();
  return hours + minutes + meridian;
}

function App() {
  const [time, setTime] = useState('2000am');

  useEffect(() => {
    if (time === '2000am') {
      setInterval(() => {
        setTime(getTime());
      }, 5000);
      setTime(getTime());
    }
  });

  return (
    <div className="App">
      <div className="clock-container">
        <Digit additionalClasses={'first-digit'} map={map.getFirstDigit(parseInt(time[0]))} />
        <Digit map={map.getNum(parseInt(time[1]))} />
        <Colon />
        <Digit map={map.getNum(parseInt(time[2]))} />
        <Digit map={map.getNum(parseInt(time[3]))} />
        <Digit additionalClasses={'letter'} map={map.getFirstLetter(time[4] === 'p')} />
        <Digit additionalClasses={'letter'} map={map.getSecondLetter()} />
      </div>
    </div>
  );
}

export default App;
