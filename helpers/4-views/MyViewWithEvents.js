import { View } from "backbone";
import Template from "./eventsTemplate.ejs";
import { MyTodoModel } from "../3-models-and-colletions/1-models/MyTodoModel";

export class MyViewWithEvents extends View{

  constructor(attrs){
    super(attrs);
    this.collection.bind('add', this.render.bind(this))
  }

  get el(){
    return '#viewWithEvents'
  }

  get template(){
    return Template;
  }

  get events(){
    return {
      'click button#newItemButton': 'pushElement'
    }
  }

  initialize(){
    this.render();
  }

  render(){
    this.$el.html(this.template(this.collection));
    return this;
  }

  pushElement(){
    const newItem = this.getNewItemValues();
    if(newItem.title){
      this.collection.add(new MyTodoModel(newItem));
    }
    
  }

  getNewItemValues(){
    return { 
      title: this.$('#itemName')[0].value,
      completed: false
    }
  }

}
