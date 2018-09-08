## Views
> This is a deeper dive into Views, that we've already been seen into the [2-templates](helpers/2-templates)

### Basic Properties

#### As we saw, the basic properties of a View are:
 * `el` (property) - The element where the element will be attached
 * `initialize` (function) - (can be taken as the `constructor` of the class)The first function called when the view it's instantiated. This functions receives  the arguments that are passed when you create the view, like:
 ```javascript
  new MyOwnView(obj);
 ```
 > The obj parameter would be accessible in the initialize function.

 * `$el` (property) - Jquery object
 * `render` (function) - where you can add html to your `$el`
#### Optional Properties
 * `tagName` (property) -
 * `className` (property) -
 * `attributes` (property) -
 * `id` (property) -
 * `events` (property) - See the next topic
 > By default the element is an empty div.

### Events Delegation

#### The events of an view are store on a property of the class
##### An event delegation must be something like:
```javascript 
{"EVENT_TYPE QUERY_SELECTOR_OF_THE_ELEMENT":    "NAME_OF_THE_FUNCTION_TO_BE_INVOLKED" } 
```

### Let's make an example.

#### Creating our template
```html
<div>
    <div id="newItem">
        <input type="text" placeholder="item's Name" id="itemName">
        <input type="text" placeholder="item's Value" id="itemValue">
        <button id="newItemButton">New Item</button>
     </div>
    <div>
        <table>
        <% models.map( ( { attributes: { title, completed} }) => { %>
            <tr>
                <td><h6><%= title %></h6></td>
                <td><h6><%= completed %></h6></td>
            </tr>
        <% })%>
        </table>
    </div>
    <button id="saveButton">Save</button>
</div>
```
#### Creating our view

```javascript
import { View } from "backbone";
import Template from "./eventsTemplate.ejs";
import { MyTodoModel } from "../3-models-and-colletions/1-models/MyTodoModel";

  export class MyViewWithEvents extends View{

  constructor(attrs){
    super(attrs);
  }

  get el(){
    return '#viewWithEvents'
  }

  get template(){
    return Template;
  }

  initialize(){
    this.render();
  }

  render(){
    this.$el.html(this.template(this.collection));
    return this;
  }

}

```
#### Now instatiate the view passing our collection
```javascript 
let myTodoList = new TodoList([{
      title: 'firstItem',
      completed: false
    },
    {
      title: 'secondItem',
      completed: true
    }
  ]);
const view = new MyViewWithEvents({collection: myTodoList});

```

#### Create the first event on `click in the button with the id of newItemButton` and create our `pushElement` function

> Inside of the `MyViewWithEvents` javascript file.
```javascript

  get events(){
    return {
      'click button#newItemButton': 'pushElement'
    }
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

```
#### Finally we start watch the change event of our collection, to trigger the render function again

```javascript

  constructor(attrs){
    super(attrs);
    this.collection.bind('add', this.render.bind(this))
  }

```
> The `.bind(this)` is needed, otherwise the class losses it's context

#### That's pretty much it. We new can create now Todos.


