import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import template from './template.ejs'

class App extends View {
  constructor({ model = {} }) {
    super({ model })
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
    const temp = this.template(this.model);
    this.$el.html(temp)
    return this;
  }
  /**
   *
   * @param {JQuery.Event} e
   */
  onClickButton (e) {
    console.log(e);
    alert('work fine');
  }
}

$(document.body).ready(() => {
  const app = new App({ model: { name: 'Iago Leonardo Laguna' } });
  console.log(app);
})
