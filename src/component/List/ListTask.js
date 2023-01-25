import React from "react";
import { useSelector } from "react-redux/es/exports";
import Task from "./Task";

const ListTask = () => {
  const todos = useSelector((state) => state.taskReducer.todos);
  const filteredTodos = useSelector((state) => state.taskReducer.filteredTodos);

  if (filteredTodos && filteredTodos.length > 0) {
    return (
      <ul className="list-group mt-3">
        {filteredTodos.map((todo) => (
          <Task todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <Task todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default ListTask;