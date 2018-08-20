import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

class App extends View {
  constructor () {
    super()
  }
  el () {
    return '#app'
  }

  template () {
    return _.template($('<h1> Hello World </h1>').html())
  }


  initialize () {
    this.render()
  }

  render () {
    const html = this.template({})
    this.$el.html(html)
    return this;
  }
}

$(document.body).ready(() => {
  const app = new App();
  console.log(app);

})
