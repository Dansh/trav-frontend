import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import CornerLogo from './components/cornerLogo';
import { CitiesAutocomplete } from './components/citiesAutocomplete';

import earthImg from './images/earth.png';
import halfEarthImg from './images/half-earth.png';

import DestinationPage  from './components/destinationPage';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';


let tripData = {};
let API_URL =  "https://rest-api-server.herokuapp.com/"


function App() {    
  const [currentQuizLevel, setCurrentQuizLevel] = useState(0);

  const [posts, setPosts] = useState([]);

  function get_trip(){
    fetch(API_URL + '?destination=' + tripData['destination'] + "&nights=" + tripData['nights'] + "&budget=" + tripData['budget'] + "&type=" + tripData['type'])
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      };


  let quizLevels = ["destination", "nights", "budget", "type"];
  let currentQuiz = quizLevels[currentQuizLevel]; 
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    addDataToQuizDict(inputValue);
    if (currentQuizLevel === 3)
    {
      get_trip();
    }
    setCurrentQuizLevel(currentQuizLevel+1);
 
    setInputValue('');    
    console.log(tripData);

  };

  function addDataToQuizDict(data){
    tripData[quizLevels[currentQuizLevel]] = data;    
  }

  function getCurrentQuizDict(){
    let currentQuizDict = {};
    if (currentQuiz === "destination")
    {
      currentQuizDict["title"] = "Let's Find Your Destination";
    }
    else if (currentQuiz === "nights")
    {
      currentQuizDict["title"] = "How Many Nights?";
    }
    else if (currentQuiz === "budget")
    {
      currentQuizDict["title"] = "What Is Your Budget?";
    }
    else if (currentQuiz === "type")
    {
      currentQuizDict["title"] = "What Is Your Travel Style?";
    }
    return currentQuizDict;
  }
  
  
  if (currentQuizLevel <= 3)
  {
    return (    
      <div className="App">
        <div className="container"  style={{height: "100vh"}}>
          <div class="row" style={{height: "30%"}}>
            <h1 id="main-header">{getCurrentQuizDict().title}</h1>
          </div>
          <div class="row container" style={{margin: 0, height: "25%"}}>
            <div class="col" style={{paddingLeft: 0, paddingRight: 0}}>
              <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} id="input-text"/>
            </div>
            <div class="col" style={{paddingLeft: 0, paddingRight: 0}}>
              <button onClick={handleButtonClick} id="continue-btn" class="btn btn-primary">Continue</button>
            </div>
          </div>
          <div class="row justify-content-center" style={{height: "45%"}}>
            <img src={halfEarthImg} id="half-earth-image" ></img>
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="container">
        <h1 id="main-header" style={{marginBottom: 30}}>Your Travel Plan</h1>
        <h3>{posts["trip"]}</h3>
      </div>
    )
  }
}


export default App;