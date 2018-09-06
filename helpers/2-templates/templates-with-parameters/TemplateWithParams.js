import { View } from "backbone";
import TemplateExample from "./../templateExample.ejs";

export class TemplateWithParams extends View {
  constructor(props) {
    super(props);
    this.listenTo(this.model, "change", this.render);
  }

  get el() {
    return "#templateWithParams";
  }

  get template() {
    return TemplateExample;
  }

  initialize(props) {
    this.attributes = props;
    this.render();
  }

  render() {
    //Getting the props from where we stored them
    const props = this.attributes;
    this.$el.html(this.template(props));
    return this;
  }
}
