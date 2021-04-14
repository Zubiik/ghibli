import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilmList from './FilmList';
import Film from "./selectedFilm/Film.js";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
      <Router>
      <div>
        <Switch>
          <Route path="/film/:filmId">
            <Film/>
          </Route>
          <Route path="/">
          <FilmList />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
