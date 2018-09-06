import { Model } from "backbone";

export class MyTodoModel extends Model{

  get defaults(){
    return {
      title: 'New Todo',
      completed: false
    }
  }

}
