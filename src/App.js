import React, { useState, useEffect } from 'react';
import './App.css';
import Forms from './Forms';


function App() {
  const [incident, setIncident] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const setIncidentHandler = (event) => {
    setIncident(event)
  }

  const setLatitudeHandler = (event) => {
    setLatitude(event)
  }

  const setLongitudeHandler = (event) => {
    setLongitude(event)
  }

  useEffect(()=> {
    console.log("Inside Effect", incident, latitude, longitude);
  }, [incident, latitude, longitude])

  return (
    <div className="App">
      <nav style={{background: 'beige', height: "50px", display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
        <b>Integrated Incident Management System (IIMS)</b>
      </nav>
      <div>
        <div style={{float: 'left', width: '60%', height: '695px'}}>
          MAP
        </div>
      </div>
      <div>
        <div style={{float: 'right', width: '40%', height: '695px'}}>
        <Forms  setIncident={setIncidentHandler} 
                setLatitudeHandler={setLatitudeHandler}
                setLongitudeHandler={setLongitudeHandler}
           /> 

        </div>
      </div>
    </div>
  );
}

export default App;
