import {
  Model
} from "backbone";
import App from "./components/app-component/AppComponent.js";
import _ from "underscore";
import $ from "jquery";
import {
  AppView
} from "./../helpers/1-begin/controller.js";
import {
  TemplateView
} from "./../helpers/2-templates/controller.js";
import {
  TemplateWithParams
} from "../helpers/2-templates/templates-with-parameters/TemplateWithParams.js";
import {
  MyTodoModel
} from "./../helpers/3-models-and-colletions/1-models/MyTodoModel";
import {
  TodoList
} from "./../helpers/3-models-and-colletions/2-collections/MyCollection";
import {
  MyViewWithEvents
} from "./../helpers/4-views/MyViewWithEvents";

$(document.body).ready(() => {

  initApp()
  initNewApp();
  initTemplateExample();
  initTemplateWithParams();
  initAndTestModel();

  initCollection();
  initTemplateWithEvents();
});

const initTemplateExample = () => new TemplateView();

const initNewApp = () => new AppView();

const initApp = () => {
  const model = new Model({
    name: "Backbone test",
    counter: 0,
    people: [{
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

  const app = new App({
    model
  });
}

const initTemplateWithParams = () => {
  new TemplateWithParams({
    name: "myNewBill",
    bills: [{
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
  console.log(myDefaultModel.get('title')); // outputs : 'New Todo'
  console.log(myDefaultModel.title); // outputs: undefined
  console.log(myDefaultModel.get('completed')); //outputs : false
  console.log(myDefaultModel.completed); // outputs: undefined
  const myModel = new MyTodoModel({
    title: 'do something usefull',
    completed: true
  })

  console.log(myModel.get('title')); // outputs : 'do something usefull'
  console.log(myModel.get('completed')); //outputs : true


  console.log(myModel.get('did_date')); //outputs undefined
  myModel.set('did_date', new Date());
  console.log(myModel.get('did_date')); //outputs 'Thu Sep 06 2018 14:47:36 GMT-0300 (Brasilia Standard Time)'
}

const initCollection = () => {
  let myTodoList = new TodoList();

  /**
   * Collection.create parse the object into the model of the collection, but it need the url that was mentioned before,
   * if you don't need to make the request you just need to use the add method
   *
   * If you didn't put the url property, this method will thrown an error.
   */
  // myTodoList.create({ title: 'MyFirstTodo', completed: false  })

  /**
   * Inserting model direcly into the list
   * this way of inserting the model into the list doesn't make the request.
   */
  const myTodo = new MyTodoModel({
    title: 'FirstTodo',
    completed: true
  });

  myTodoList.add(myTodo)

  const mySecondTodo = new MyTodoModel({
    title: 'SecondTodo',
    completed: true
  });

  myTodoList.add(mySecondTodo);

  console.log(myTodoList.length); //outputs 2

  // You can get the actual data of the Collection just by parsing into a JSON

  console.log(JSON.stringify(myTodoList));
  // outputs [{"title":"FirstTodo","completed":true},{"title":"SecondTodo","completed":true}]

  // For getting a array of a specific property you can use the method pluck
  console.log(myTodoList.pluck('title'));


  // And you can also remove itens from the list

  myTodoList.remove(myTodo);

  console.log(myTodoList.length); // outputs 1
}

const initTemplateWithEvents = () => {
  const list = {
    listName: 'myList',
    itens: [{
        name: 'firstItem',
        value: 'firstItemValue'
      },
      {
        name: 'secondItem',
        value: 'secondItemValue'
      }
    ]
  }
  new MyViewWithEvents(list);

}
