import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    FILTER_TASK,
    SET_CURRENT_TASK,
    TOGGLE_COMPLETE_TASK,
  } from "../actions/type";
  
  const initialState = { todos: [], current: null, filteredTodos: [] };
  
  const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TASK:
        return {
          ...state,
          todos: [...state.todos, payload],
        };
      case EDIT_TASK:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === payload.id ? payload : todo
          ),
          current: null,
        };
      case DELETE_TASK:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== payload),
        };
      case SET_CURRENT_TASK:
        return {
          ...state,
          current: payload,
        };
      case TOGGLE_COMPLETE_TASK:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
      case FILTER_TASK:
        return {
          ...state,
          filteredTodos:
            payload === "completed"
              ? state.todos.filter((todo) => todo.isDone)
              : payload === "uncompleted"
              ? state.todos.filter((todo) => !todo.isDone)
              : [],
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;