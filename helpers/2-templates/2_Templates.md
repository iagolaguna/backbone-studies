### Backbone Templates

# Backbone uses underscore.js templates (.ejs) that look a lot like .jsp files

## Creating Template

```html
<div>
  <h1> <%= name%></h1>
  <% bills.map( function(element){ %>
  <div>
      <%= element.name%>
      <%= element.value%>
  </div>
  <% }); %>    
</div>
```

# This template expects to receive an object like { name: 'myObjectName', bills: [{ name: 'myFirstBill', value: "My Bill's value"}]}
