## Collections

### Collections are ordered sets of models, where you can get and set models in the collection, listen for events and fetch for model's data from the server.

#### Creating a collection class
```javascript
  import { Collection } from "backbone";
  import { MyTodoModel } from "./../1-models/MyTodoModel";

  export class TodoList extends Collection{

    /**
     * @description set the model of the collection
    */
    get model(){
      return MyTodoModel;
    }
  }
```
##### When creating a collection you've got to explicit the `Model` for this collection.
> You can also set a url for fetching, to learn more about it read this [section of the documentation](http://backbonejs.org/#Collection-fetch)

### Using the collection

#### The Collection.create method
```javascript
  let myTodoList = new TodoList();

  /**
   * Collection.create parse the object into the model of the collection, but it need the `url` that was mentioned before,
   * if you don't need to make the request you just need to use the add method
   *
   * If you didn't put the `url` property when creating the collection, this method will thrown an error.
   */
  myTodoList.create({ title: 'MyFirstTodo', completed: false  })

```

#### Normal usages

```javascript
  // using the `myTodolist` instantiated before.

  /**
   * You can easily insert new model instance into the Collection using the method `add`
   *
   */

  const myTodo = new MyTodoModel({title: 'FirstTodo', completed: true});

  myTodoList.add(myTodo)

  const mySecondTodo = new MyTodoModel({title: 'SecondTodo', completed: true});

  myTodoList.add(mySecondTodo);

  console.log(myTodoList.length); //outputs 2

  // You can get the actual data of the Collection just by parsing into a JSON

  console.log(JSON.stringify(myTodoList)); // outputs [{"title":"FirstTodo","completed":true},{"title":"SecondTodo","completed":true}]

  // For getting a array of a specific property you can use the method `pluck`
  console.log(myTodoList.pluck('title')); //outputs ["FirstTodo", "SecondTodo"]

  // And you can also remove itens from the list

  myTodoList.remove(myTodo);

  console.log(myTodoList.length); // outputs 1

```
