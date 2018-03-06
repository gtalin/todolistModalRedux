import React from 'react'

import {connect} from 'react-redux';
import {addItem, delItem, hideModal} from '../playground/reduxExp'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input:''};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleInput(e) {
    let input = e.target.value;
    this.setState({input:input});
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.input);
    this.props.submitNewMessage(this.state.input);
    this.setState({input:""});
    this.props.hideModal();
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.hideModal();
  }
  render() {
    return (
      <form>
      <input placeholder="Enter Item" onChange={this.handleInput} value={this.state.input}/>

      <button onClick={this.handleSubmit}>Add</button>
      <button onClick={this.handleCancel}>Cancel</button>
      </form>
    )
  }
}

const mapStateToProps = (state)=> {
  return {items: state.itemReducer, modal:state.modalReducer}
}

const mapDispatchToProps = (dispatch)=> {
  return {
    submitNewMessage: (newMessage)=>{
      dispatch(addItem(newMessage));
    },
    hideModal: ()=>{
      dispatch(hideModal());
    }
  }
}

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default ConnectedForm;
