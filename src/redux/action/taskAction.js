import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    FILTER_TASK,
    SET_CURRENT_TASK,
    TOGGLE_COMPLETE_TASK,
  } from "./type";
  
  export const addTask = (newTask) => ({
    type: ADD_TASK,
    payload: newTask,
  });
  
  export const editTask = (newTask) => ({
    type: EDIT_TASK,
    payload: newTask,
  });
  
  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
  });
  
  export const setCurrentTask = (currentTask) => ({
    type: SET_CURRENT_TASK,
    payload: currentTask,
  });
  
  export const filterTask = (payload) => ({
    type: FILTER_TASK,
    payload,
  });
  
  export const toggleCompleteTask = (id) => ({
    type: TOGGLE_COMPLETE_TASK,
    payload: id,
  })