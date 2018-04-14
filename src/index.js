// importing dependencies from react and react-dom
import React from 'react';
import ReactDom from 'react-dom';
// import the components build in app.js
import App from './components/app';
// application to render our component into the #app element we made on our index.html file.
//telling your clients screen to render the App component (noted by the tags we put on either side of it) inside a document element with the id of app.
ReactDom.render(<App />, document.querySelector('#app'));