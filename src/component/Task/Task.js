import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCurrentTask,
  toggleCompleteTask,
} from "../redux/actions/taskActions";

const Task = ({ todo }) => {
  const { id, description, isDone } = todo;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }

    if (e.target.id === "delete") {
      dispatch(deleteTask(id));
    }

    if (e.target.id === "completed") {
      dispatch(toggleCompleteTask(id));
    }
  };
  return (
    <li
      className={`list-group-item ${
        isDone && "list-group-item-success"
      } d-flex align-items-center justify-content-between`}
    >
      <div>{description}</div>
      <div className="btn-group" role="group">
        <i id="completed" className="fa fa-check " onClick={handleClick}></i>
        <i
          id="edit"
          className="fas fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={handleClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={handleClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;