import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodo, resetGetTodoStatus } from '../actions/Todo';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructore')
  }
  
  componentDidMount() {
    console.log('componentDidMount')
    this.props.getTodo();
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.status.sent) {
  //     if (nextProps.todos) {
  //       return {
  //         error: 'no todos'
  //       }
  //     }
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if (this.props.status.sent) {
      console.log('didUpdate status.sent')
      this.props.resetGetTodoStatus();
    }
    
    if (this.props.status.error) {
      console.log('didUpdate status.error')
      this.props.resetGetTodoStatus();
    }
  }

  render() {
    console.log('render')
    let { todos, getTodo, status } = this.props;

    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          { todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>
          }) }
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { todos, getTodosStatus } = state.todos;
  return {
    todos,
    status: getTodosStatus
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodo,
      resetGetTodoStatus
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TodosList);