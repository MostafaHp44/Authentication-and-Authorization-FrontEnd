import './App.css';
import Routess from './Components/routes';
import React, { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routess loggedIn={loggedIn}/>
    </div>
  );
}

export default App;
