import { Model } from "backbone";
import App from "./components/app-component/AppComponent.js";
import _ from "underscore";
import $ from "jquery";
import { AppView } from "../helpers/1-begin/controller.js";
import { TemplateView } from "../helpers/2-templates/controller.js";
import { TemplateWithParams } from "../helpers/2-templates/templates-with-parameters/TemplateWithParams.js";

$(document.body).ready(() => {
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

  const newApp = new AppView();
  const templateExample = new TemplateView();

  const myNewBills = new TemplateWithParams({
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

  console.log(app);
});
