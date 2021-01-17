import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controllers from './components/controllers'
import Candidates from './components/candidates'
//Boostrap js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



function App() {

  const [candidates, setCandidates] = useState([]);

  return (
    <div className="container-flex">
      <div>Header</div>
      <div className='row'>
        <div className='col-4'>
          <Controllers updateCandidates={setCandidates} />
        </div>
        <div className='col-8 border'>
          <Candidates candidates={candidates}/>
        </div>
      </div>
    </div>
  );
}

export default App;
