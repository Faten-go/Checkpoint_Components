import React from 'react';
import logo from './logo.svg';
import './App.css';
//importing components
import ProfilPhoto from "./Component/Profile/ProfilePhotos"
import Adress from "./Component/Profile/Adress"
import FullName from "./Component/Profile/FullName"




function App() {
  return (
    <div className="App">
    <h1 > Checkpoint Component</h1>
    <ProfilPhoto/>
    <FullName/>
    <Adress/>
    </div>
  );
}

export default App;
