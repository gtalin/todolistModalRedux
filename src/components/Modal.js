import React from 'react';

import '../styles/modal.scss'

import {connect} from 'react-redux';
import {showModal,hideModal} from '../playground/reduxExp'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {visible:false}

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(e) {
    //this.setState({visible: !this.state.visible})
    console.log(this.props);
    this.props.showModal();
  }
  handleClose() {
    //this.setState({visible: !this.state.visible});
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>Add</button>
        {/*this.state.visible && <ModalWindow handleClose={this.handleClose} content={this.props.content}/>*/}
        {this.props.modal && <ModalWindow content={this.props.content}/>}

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

const mapDispatchToProps = (dispatch) =>{
  return {
    showModal : ()=>{
      dispatch(showModal());
    }
  }
}

const ConnectedModal = connect(mapStateToProps,mapDispatchToProps)(Modal);

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <h1>Hello</h1>
          {this.props.content}
          <button onClick={this.props.handleClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default ConnectedModal;
