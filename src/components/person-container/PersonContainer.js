import { View } from 'backbone';
import template from './template.ejs'
import PersonItem from '../person-item'

export default class PersonContainer extends View {
  constructor(attributes) {
    super(attributes)
    this.listenTo(this.collection, 'change', this.render);
  }

  get tagName () {
    return 'div';
  }

  get template () {
    return template;
  }

  initialize () {
    this.render()
  }

  render () {
    // const temp = this.template({ persons: this.collection });
    // this.$el.html(temp)
    this.renderAll();
    return this;
  }

  renderAll () {
    this.collection.forEach((person) => this.renderOne(person))
  }

  renderOne (model) {
    const personItem = new PersonItem({ model });
    this.$el.append(personItem.render().el)
  }
}
