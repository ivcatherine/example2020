import React from "react";

import { Modal } from "./Modal";
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

export class TodoPage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {isModalVisible: false};
  }

  toggleModal = () => {
    this.setState((state) => ({isModalVisible: !state.isModalVisible}));
  }

  handleClick = () => {
    console.log("click");
    this.toggleModal();
  }

  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
        <button onClick={this.toggleModal}>Open modal</button>
        <Modal isVisible={this.state.isModalVisible} onClick={this.handleClick}/>
    </>)
  }
}