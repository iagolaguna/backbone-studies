import { View } from "backbone";
import TemplateExample from "./../templateExample.ejs";

export class TemplateWithParams extends View {
  constructor(props) {
    super(props);
  }

  get el() {
    return "#templateWithParams";
  }

  get template() {
    return TemplateExample;
  }

  initialize(props) {
    this.props = props;
    this.render();
  }

  render() {
    //Getting the props from where we stored them
    const props = this.props
    this.$el.html(this.template(props));
    return this;
  }
}
