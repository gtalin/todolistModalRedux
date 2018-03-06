import React from 'react'
import {connect} from 'react-redux';

import ConnectedModal from './Modal'
import ConnectedForm from './Form'

import {addItem, delItem} from '../playground/reduxExp'

class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInput(e) {
    let input = e.target.value;
    this.setState({input:input});
  }
  handleSubmit() {
    //this.setState({items:[...this.state.items,this.state.input]});
    this.props.submitNewMessage(this.state.input);
    this.setState({input:""});//reset to empty on submit
    //and that is why in jsx, we set value to this.state.input
  }
  handleDelete(i) {
    //console.log(e.target);
    //this.props.delItem
    console.log(i);
    this.props.deleteMessage(i);
  }
  render() {
    const items = this.props.items.map((ele,i)=> {
      return <li key={i}>{ele}<button key={i} onClick={(e)=>{e.stopPropagation();this.handleDelete(i)}}>Del</button></li>
    })
    return (
      <div>
        <h1>Hello!</h1>
        <input onChange={this.handleInput} placeholder="Enter Item" value={this.state.input}/>
        <button onClick={this.handleSubmit}>Add</button>
        <ConnectedModal content={<ConnectedForm/>}/>
        <ul>{items}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state in mapStateToProps", state);
  //return {items: state};
  return {items: state.itemReducer, modal:state.modalReducer}
  //return {items:state.items, modal:state.modal};
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage : (newMessage)=>{
      dispatch(addItem(newMessage));
    },
    deleteMessage : (index) => {
      dispatch(delItem(index));
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(ListApp);

export default Container;
