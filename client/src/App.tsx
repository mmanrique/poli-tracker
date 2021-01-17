import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controllers from './components/controllers'
//Boostrap js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="container-flex">
      <div>Header</div>
      <div className='row'>
        <div className='col-4'>
          <Controllers />
        </div>
        <div className='col-8 border'>
          Border 2
        </div>
      </div>
    </div>
  );
}

export default App;
