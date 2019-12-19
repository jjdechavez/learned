const initialState = {
  todos: [],
  getTodosStatus: {
    sending: false,
    sent: false,
    error: null
  }
}

export const Todo = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_TODOS': {
      let status = {
        ...state.getTodosStatus,
        sending: true
      }

      return {
        ...state,
        getTodosStatus: status
      }
    }
    case 'GET_TODOS_FULFILLED': {
      let status = {
        ...state.getTodosStatus,
        sending: false,
        sent: true
      }
      return {
        ...state,
        getTodosStatus: status,
        todos: payload
      }
    }
    case 'GET_TODOS_FAILED': {
      let status = {
        ...state.getTodosStatus,
        sending: false,
        sent: false,
        error: payload
      }
      return {
        ...state,
        getTodosStatus: status
      }
    }
    case 'RESET_GET_TODOS_STATUS': {
      let status = {
        ...state.getTodosStatus,
        sending: false,
        sent: false,
        error: null   
      }

      return {
        ...state,
        getTodosStatus: status
      }
    }

    default: {
      return state;
    }
  }
}