import React from 'react';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
          />
        )}
      </ul>
    )}
}
const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
