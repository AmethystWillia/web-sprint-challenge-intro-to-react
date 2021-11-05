// Importing cool stuff
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Import components
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Set state
  const [swInfo, setswInfo] = useState([]);
  const [currentSwId, setCurrentSwId] = useState(null);

  const openDetails = name => {
    setCurrentSwId(name);
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
    <div className="App">
      <h1 className="Header">Characters</h1>
      {swInfo.map(info => {
        return <Character info={info} openDetails={openDetails} />
      })}
    </div>
  );
}

export default App;
