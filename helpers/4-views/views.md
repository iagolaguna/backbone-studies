## Views
> This is a deeper dive into Views, that we've already been seen into the [2-templates](https://github.com/luanraithz/Backbone-Helpers/tree/master/helpers/2-templates)

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
```javascript {"EVENT_TYPE QUERY_SELECTOR_OF_THE_ELEMENT": "NAME_OF_THE_FUNCTION_TO_BE_INVOLKED" } ```

```javascript


```




