import { View } from "backbone";
import TemplateExample from "./templateExample.ejs";
import _ from "underscore";

export class TemplateView extends View {
	constructor(props){
		super(props);
	}
  get el() {
    return "#templateDiv";
  }

  get template() {
    return TemplateExample;
  }

  initialize() {
    this.render();
  }

  render() {
    const myObject = {
      name: "Bills",
      bills: [
        {
          key: "Supermarket",
          value: "R$ 200.."
        },
        {
					key: 'Dinner with friends',
					value: 'R$ 100..'
				},
				{
					key: 'NEW FUCKING CIVILIZATION',
					value: 'R$ 150.00'
				}
      ]
    };
    this.$el.html(this.template(myObject));
    return this;
  }
}
