// Importing cool stuff
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './index.css'

// Import components
import Character from './components/Character';
import Details from './components/Details';

// Styling
const StyledApp = styled.div`
  marging: 2%;
  padding: 1%;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.6rem;
    color: gold;
    padding: 1%;
    margin: 0 2%;

    border: none;
    border-radius: 10px;
    background-color: rgb(0, 0, 0, 0.7);
  }
  button:hover {
    color: white;
    background-color: rgb(100, 100, 100, 0.7);
    border: 2px solid gold;
  }

  h1 {
    font-size: 6.2rem;
    -webkit-text-fill-color: black;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: gold;

    text-shadow: 3px 3px gold;
  }
  h2 {
    font-size: 3.4rem;
  }
  h3 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Set state
  const [swInfo, setswInfo] = useState([]);
  const [currentSwId, setCurrentSwId] = useState(null);

  const openDetails = url => {
    setCurrentSwId(url);
  };
  const closeDetails = () => {
    setCurrentSwId(null);
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // Calling API
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setswInfo(res.data);
      })
      .catch(err => {
        console.log(`You fucked up! ${err}`);
      })
  }, [])

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      {swInfo.map(info => {
        return <Character info={info} openDetails={openDetails} />
      })}
      {
        currentSwId && <Details swId={currentSwId} close={closeDetails} />
      }
    </StyledApp>
  );
}

export default App;
