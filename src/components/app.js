/* importing the Component function from the react dependency
 creating component with the function we imported from React*/
import React, { Component } from "react";

/* exporting it as a default class with the name App
 anything inside this object is called when we import in in other components
render() function we are going to return a div with the contents “Hello World”*/
export default class App extends Component {
  render() {
    return (
    <div>
    Hello World
    </div>
    );
  }
}
