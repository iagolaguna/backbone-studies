import { View } from "backbone";
import Template from "./eventsTemplate.ejs";
import { MyTodoModel } from "../3-models-and-colletions/1-models/MyTodoModel";

export class MyViewWithEvents extends View{

  constructor(attrs){
    super(attrs);
    this.collection.bind('add', this.render.bind(this));
    this.saveCallback = attrs.saveCallback;

  }

  get el(){
    return '#viewWithEvents'
  }

  get template(){
    return Template;
  }

  get events(){
    return {
      'click button#newItemButton': 'pushElement',
      'click input.taskCompletedCheckBox' : 'markTodoAsCompleted',
      'click button#saveTestButton': 'save'
    }
  }

  save() {
    this.saveCallback(this.collection);
  }

  initialize(){
    this.render();
  }

  render(){
    this.$el.html(this.template(this.collection));
    return this;
  }

  markTodoAsCompleted(event){
    const todoTitleTarget = event.target.parentElement.parentElement.firstElementChild.textContent;
    const todoTargetModel = this.collection.models[this.collection.models.findIndex(({ attributes: { title }}) => title === todoTitleTarget)];
    
    todoTargetModel.attributes.toggleCompleted();
    this.render();
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
