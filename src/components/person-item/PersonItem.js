import { View } from 'backbone';
import template from './template.ejs'
export default class PersonItem extends View {
  constructor(attributes) {
    super(attributes)
    this.listenTo(this.model, 'change', this.render);
  }
  get template(){
    return template;
  }

  initialize () {
    this.render()
  }

  render () {
    const temp = this.template(this.model.attributes);
    this.$el.html(temp)
    return this;
  }
}
