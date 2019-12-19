import axios from 'axios';

const url = 'http://localhost:3000/todos';

export const getTodo = () => async dispatch => {
  dispatch({ type: 'GET_TODOS' });
  try {
    const res = await axios.get(url);
    dispatch({ type: 'GET_TODOS_FULFILLED', payload: res.data });
    dispatch({ type: 'RESET_GET_TODOS_STATUS' });
  } catch (error) {
    dispatch({ type: 'GET_TODOS_FAILED', payload: error });
  }
}

export const resetGetTodoStatus = () => async dispatch => {
  dispatch({ type: 'RESET_GET_TODOS_STATUS' });
}