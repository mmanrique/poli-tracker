import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controllers from './components/controllers';
import Candidates from './components/candidates';
import Stats from './components/stats';
//@ts-ignore
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Boostrap js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import getPartidos from './components/data/partidos'

function App() {

  const [candidates, setCandidates] = useState([]);
  const [partidos] = useState(getPartidos());

  return (
    <div className="container-flex">
      <BrowserRouter>
        <Switch></Switch>
        <Route path="/" render={
          () => (
            <div className='row'>
              <div className='col-4'>
                <Controllers updateCandidates={setCandidates} partidos={partidos} />
              </div>
              <div className='col-8 border candidates'>
                <Candidates candidates={candidates} />
              </div>
            </div>
          )
        } exact />
        <Route path="/stats" component={Stats} />
      </BrowserRouter>
    </div>
  );
}

export default App;
