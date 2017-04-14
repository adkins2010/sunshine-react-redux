import App from './App';
import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
const loadData = () => {
  console.log("loadData");
  return fetch("http://localhost:8080/spaces",
    {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(spaces => {
      console.log(spaces);
      ReactDOM.render(
          <App preloadedState={{spaces: spaces}} />,
        document.getElementById('root')
      );
    })
}

window.onload = () => {
  loadData()
}