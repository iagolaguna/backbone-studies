## Backbone Model

### Models are used to store logic, data, validation, default values, conversions, etc.

```javascript
import { Model } from "backbone";

export class MyTodoModel extends Model {
  get defaults() {
    return {
      title: "New Todo",
      completed: false
    };
  }
}
```

### Default values and accessing props

#### When you are instantiating a new Model like this:

```javascript
  const myModel = new MyTodoModel();
```

#### Your props will be the default, on our case:

```javascript
  console.log(myModel.get("title")); // outputs : 'New Todo'
  console.log(myDefaultModel.get("completed")); //outputs : false
```

#### For custom models, It's realy simple, you just must pass the props as argument for the model contructor, like:

```javascript
  const myCustomModel = new MyTodoModel({
   title: "do something usefull",
   completed: true
  });

  console.log(myModel.get("title")); // outputs : 'do something usefull'
  console.log(myModel.get("completed")); //outputs : true
```

#### For accessing props of the model, you can't access just like objects, you must use the `get` function.

```javascript
  const mySuperModel = new MyTodoModel();

  console.log(mySuperModel.get("title")); // outputs : 'New Todo'
  console.log(mySuperModel.title); // outputs: undefined
  console.log(mySuperModel.get("completed")); //outputs : false
  console.log(mySuperModel.completed); // outputs: undefined
```
