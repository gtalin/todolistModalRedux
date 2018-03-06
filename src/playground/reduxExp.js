import React from 'react';
import {createStore, combineReducers} from 'redux';

import {Provider, connect} from 'react-redux'

import Container from '../components/ListApp'

//action creator
const ADD = 'ADD';
const DELETE = 'DELETE';
const SHOWMODAL = 'SHOWMODAL';
const HIDEMODAL ='HIDEMODAL';

const showModal = ()=> {
  return {
    type: SHOWMODAL
  }
}

const hideModal = ()=> {
  return {
    type: HIDEMODAL
  }
}

const addItem = (item)=> {
  return {
    type:ADD,
    item: item
  }
}

const delItem = (index)=> {
  return {
    type: DELETE,
    index: index
  }
}

//reducer
/*
const itemReducer = (state={items:[],modal:false}, action) => {
  switch (action.type) {
    case ADD:
      return {items:[...state.items,action.item],modal:modal};
    case DELETE:
      return {items:state.items.slice(0,action.index).concat(state.items.slice(action.index+1)),modal:modal}
    default:
      return state;
  }
}
*/

//reducer:: correct so far
const itemReducer = (state=[], action) => {
  switch (action.type) {
    case ADD:
      return [...state,action.item];
    case DELETE:
      return state.slice(0,action.index).concat(state.slice(action.index+1));
    default:
      return state;
  }
}

/*
const itemReducer = (state=[]}, action) => {
  switch (action.type) {
    case ADD:
      return {items:[...state.items,action.item], modal:state.modal};
    case DELETE:
      return {items: state.items.slice(0,action.index).concat(state.items.slice(action.index+1)), modal:state.modal}
    default:
      return state;
  }
}
*/


const modalReducer = (state=false , action)=>{
  switch(action.type) {
    case SHOWMODAL:
      return true;
    case HIDEMODAL:
      return false;
    default:
      return state;
  }
}



const reducer = combineReducers({itemReducer, modalReducer});
//const store = createStore(itemReducer);
const store = createStore(reducer);


//const Provider = ReactRedux.Provider;

/*
class ListWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  }
}
*/

export {store, addItem, delItem, showModal, hideModal};//export without default, import with name

//export default store;
