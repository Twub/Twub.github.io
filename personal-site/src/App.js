// JS IMPORT
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

// CSS IMPORT
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/style.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Route exact path="/"><Home/></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
