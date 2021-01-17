import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controllers from './components/controllers'
import Candidates from './components/candidates'
//Boostrap js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import getPartidos from './components/data/partidos'

function App() {

  const [candidates, setCandidates] = useState([]);
  const [partidos] = useState(getPartidos());

  return (
    <div className="container-flex">
      <div className='row'>
        <div className='col-4'>
          <Controllers updateCandidates={setCandidates} partidos={partidos} />
        </div>
        <div className='col-8 border'>
          <Candidates candidates={candidates} />
        </div>
      </div>
    </div>
  );
}

export default App;
