import { Model } from "backbone";
import App from "./components/app-component/AppComponent.js";
import _ from "underscore";
import $ from "jquery";
import { AppView } from "../helpers/1-begin/controller.js";
import { TemplateView } from "../helpers/2-templates/controller.js";
import { TemplateWithParams } from "../helpers/2-templates/templates-with-parameters/TemplateWithParams.js";
import { MyTodoModel } from "../helpers/3-model-and-colletions/models/MyTodoModel.js";

$(document.body).ready(() => {

  initApp()
  initNewApp();
  initTemplateExample();
  initTemplateWithParams();
  initAndTestModel();
});

const initTemplateExample = () => new TemplateView();

const initNewApp = () => new AppView();

const initApp = () => {
  const model = new Model({
    name: "Backbone test",
    counter: 0,
    people: [
      {
        name: "Iago",
        lastName: "Laguna",
        age: 20
      },
      {
        name: "Tiago",
        lastName: "Baguna",
        age: 25
      }
    ]
  });

  const app = new App({ model });
}

const initTemplateWithParams = () => {
  new TemplateWithParams({
    name: "myNewBill",
    bills: [
      {
        name: "myNewDinner",
        value: "R$ 1000"
      },
      {
        name: "superBiggerMarket",
        value: "R$ 200"
      }
    ]
  });
}

const initAndTestModel = () => {
  const myDefaultModel = new MyTodoModel();
  console.log(myDefaultModel.get('title'));// outputs : 'New Todo'
  console.log(myDefaultModel.title); // outputs: undefined
  console.log(myDefaultModel.get('completed')); //outputs : false
  console.log(myDefaultModel.completed); // outputs: undefined
  const myModel = new MyTodoModel({
    title: 'do something usefull',
    completed: true
  })

  console.log(myModel.get('title'));// outputs : 'do something usefull'
  console.log(myModel.get('completed')); //outputs : true

}
