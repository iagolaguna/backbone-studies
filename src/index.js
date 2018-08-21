import {  Model } from 'backbone';
import App from './components/app-component/AppComponent.js'
import _ from 'underscore';
import $ from 'jquery';




$(document.body).ready(() => {

  const model = new Model({
    name: 'Iago Leonardo Laguna',
    counter: 0,
    persons: [{
      name: 'Iago',
      lastName: 'Laguna',
      age: 20
    }, {
      name: 'Tiago',
      lastName: 'Baguna',
      age: 25
    }]
  });
  console.log(model);
  const app = new App({ model });
  console.log(app);
  // setInterval(() => console.log(model), 1000);
})
