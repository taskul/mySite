import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router basename={process.env.PUBLIC_URL}>
  //   <Link to="/mySite" />
  //   <App />
  // </Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// ReactDOM.render((
//   <Router basename={process.env.PUBLIC_URL}>
//     <App />
//   </Router>
// ), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
