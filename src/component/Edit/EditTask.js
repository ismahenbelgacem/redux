import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../redux/actions/taskActions";

const EditTask = () => {
  const [text, setText] = useState("");
  const current = useSelector((state) => state.taskReducer.current);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text) {
      const upTask = {
        ...current,
        description: text,
      };
      dispatch(editTask(upTask));
      setText("");
    }
  };

  useEffect(() => {
    if (current !== null) {
      setText(current.description);
    }
  }, [current]);

  return (
    <div
      className="modal fade"
      id="editTask"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Task
            </h5>
            <div className="modal-body">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;