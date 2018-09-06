import { Collection } from "backbone";
import { MyTodoModel } from "./../1-models/MyTodoModel";

export class TodoList extends Collection{

  /**
   * @description set the model of the collection
   */
  get model(){
    return MyTodoModel
  }

}
