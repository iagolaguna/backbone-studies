### Backbone's Views



## Create View Class 
```javascript
import { View } from "backbone";

export class AppView extends View{
  
  /**
  * @description query selector for the element where the view will be render
  */
  
  get el(){
    return '#container';
  }

  /**
   * @description first function called after instantiated
   */
  initialize(){ 
    this.render();
  }

  /**
   * @description - $el is a jquery Object where you can push content to
   */
  render (){ 
    this.$el.html('Hello world!!');
  };
}
```
### Instantiate the view 
```javascript
  const app = new AppView();
```