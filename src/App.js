import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import TiendaAterrizar from "./TiendaAterrizar";
import {BrowserRouter as Router} from "react-router-dom";
 

/* bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <TiendaAterrizar/>
    </Router>
  </React.StrictMode>
)

