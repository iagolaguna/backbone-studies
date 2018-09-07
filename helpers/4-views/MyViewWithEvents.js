import { View } from "backbone";
import Template from "./eventsTemplate.ejs";

export class MyViewWithEvents extends View{

  get el(){
    return '#viewWithEvents'
  }

  get template(){
    return Template;
  }
  
  get events(){
    return {
      'click #newItemButton': 'pushElement'
    };
  }

  initialize(list){
    this.props = list;
    this.render();
  }

  render(){
    this.$el.html(this.template(this.props));
  }

  pushElement(){
    this.getNewItemValues();
  }

  getNewItemValues(){
    console.log(this.$el);
  }

}
