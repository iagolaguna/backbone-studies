import { View, Model } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import template from './template.ejs'
import PersonContainer from './components/person-container';

class App extends View {
  constructor (attributes) {
    super(attributes)
    this.listenTo(this.model, 'change', this.render);
  }

  get el () {
    return '#app'
  }

  get template () {
    return template
  }

  get events () {
    return {
      'click button': this.onClickButton
    }
  }

  initialize () {
    this.render()
  }

  render () {
    const temp = this.template(this.model.attributes);
    this.$el.html(temp)
    return this;
  }
  /**
   *
   * @param {JQuery.Event} e
   */
  onClickButton (e) {
    console.log(e);
    let counter = this.model.get('counter') + 1;
    console.log(this.model.set({ counter }));
  }
}

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
