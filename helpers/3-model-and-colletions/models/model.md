## Backbone Model

### Models are used to store logic, data, validation, default values, conversions, etc.
```javascript
import { Model } from "backbone";

export class MyTodoModel extends Model{

  get defaults(){
    return {
      title: 'New Todo',
      completed: false
    }
  }

}

```
