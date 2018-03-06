import React from 'react'
import ReactDOM from 'react-dom';
//import ListApp from './components/ListApp'
import {Provider} from 'react-redux'
import Container from './components/ListApp'
import {store} from './playground/reduxExp'

//import ListWrapper from './playground/reduxExp'
//import {ListWrapper} from './playground/reduxExp'

class ListWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  }
}


//ReactDOM.render(<ListApp/>, document.getElementById("app"));
ReactDOM.render(<ListWrapper/>, document.getElementById("app"));
console.log("app.js is running");
console.log("some changes");
