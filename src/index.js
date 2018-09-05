import {  Model } from 'backbone';
import App from './components/app-component/AppComponent.js'
import _ from 'underscore';
import $ from 'jquery';




$(document.body).ready(() => {

  const model = new Model({
    name: 'Backbone test',
    counter: 0,
    people: [{
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
})
